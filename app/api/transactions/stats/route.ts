import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { startOfMonth, endOfMonth, subMonths } from "date-fns";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const now = new Date();
    const thisMonthStart = startOfMonth(now);
    const thisMonthEnd = endOfMonth(now);

    const lastMonth = subMonths(now, 1);
    const lastMonthStart = startOfMonth(lastMonth);
    const lastMonthEnd = endOfMonth(lastMonth);

    const [thisMonthTransactions, lastMonthTransactions] = await Promise.all([
      db.transactions.findMany({
        where: {
          userId,
          transactionDate: {
            gte: thisMonthStart,
            lte: thisMonthEnd,
          },
        },
      }),
      db.transactions.findMany({
        where: {
          userId,
          transactionDate: {
            gte: lastMonthStart,
            lte: lastMonthEnd,
          },
        },
      }),
    ]);

    const sumByType = (
      transactions: typeof thisMonthTransactions,
      type: "income" | "expense"
    ) =>
      transactions
        .filter((t) => t.type === type)
        .reduce((acc, curr) => acc + Number(curr.amount), 0);

    const calcTrend = (current: number, previous: number) => {
      if (previous === 0) return { value: 0, direction: null };
      const diff = current - previous;
      const percentChange = (diff / previous) * 100;
      return {
        value: parseFloat(percentChange.toFixed(1)),
        direction: percentChange > 0 ? "up" : percentChange < 0 ? "down" : null,
      };
    };

    const incomeCurrent = sumByType(thisMonthTransactions, "income");
    const incomePrevious = sumByType(lastMonthTransactions, "income");
    const expenseCurrent = sumByType(thisMonthTransactions, "expense");
    const expensePrevious = sumByType(lastMonthTransactions, "expense");

    const incomeTrend = calcTrend(incomeCurrent, incomePrevious);
    const expenseTrend = calcTrend(expenseCurrent, expensePrevious);

    const response = {
      stats: {
        balance: incomeCurrent - expenseCurrent,
        income: {
          current: incomeCurrent,
          previous: incomePrevious,
          trend: incomeTrend,
        },
        expense: {
          current: expenseCurrent,
          previous: expensePrevious,
          trend: expenseTrend,
        },
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("[TRANSACTION_STATS_GET ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
