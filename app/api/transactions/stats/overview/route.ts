import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addWeeks,
  isSameMonth,
  subMonths,
} from "date-fns";

export async function GET(req: Request) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("mode") || "monthly";

  if (mode === "weekly") {
    const now = new Date();
    const startDate = startOfWeek(startOfMonth(now), { weekStartsOn: 1 });
    const endDate = endOfWeek(endOfMonth(now), { weekStartsOn: 1 });

    const weeklyData = [];
    let currentStart = startDate;
    let weekNumber = 1;

    while (currentStart < endDate) {
      const currentEnd = endOfWeek(currentStart, { weekStartsOn: 1 });

      const isFullyInThisMonth =
        isSameMonth(currentStart, now) && isSameMonth(currentEnd, now);

      if (isFullyInThisMonth) {
        const income = await db.transactions.aggregate({
          _sum: { amount: true },
          where: {
            userId,
            type: "income",
            transactionDate: {
              gte: currentStart,
              lte: currentEnd,
            },
          },
        });

        const expenses = await db.transactions.aggregate({
          _sum: { amount: true },
          where: {
            userId,
            type: "expense",
            transactionDate: {
              gte: currentStart,
              lte: currentEnd,
            },
          },
        });

        weeklyData.push({
          period: `Week ${weekNumber}`,
          income: Number(income._sum.amount ?? 0),
          expenses: Number(expenses._sum.amount ?? 0),
        });

        weekNumber++;
      }

      currentStart = addWeeks(currentStart, 1);
    }

    return NextResponse.json(weeklyData);
  }

  const data = await Promise.all(
    Array.from({ length: 6 }).map(async (_, i) => {
      const date = subMonths(new Date(), 5 - i);
      const start = startOfMonth(date);
      const end = endOfMonth(date);

      const income = await db.transactions.aggregate({
        _sum: { amount: true },
        where: {
          userId,
          type: "income",
          transactionDate: { gte: start, lte: end },
        },
      });

      const expenses = await db.transactions.aggregate({
        _sum: { amount: true },
        where: {
          userId,
          type: "expense",
          transactionDate: { gte: start, lte: end },
        },
      });

      return {
        period: date.toLocaleString("default", { month: "short" }),
        income: Number(income._sum.amount ?? 0),
        expenses: Number(expenses._sum.amount ?? 0),
      };
    })
  );

  return NextResponse.json(data);
}
