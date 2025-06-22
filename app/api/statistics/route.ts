import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Ambil parameter bulan & tahun (opsional)
    const { searchParams } = new URL(req.url);
    const month = searchParams.get("month"); // 1-12
    const year = searchParams.get("year"); // contoh: 2025

    let dateFilter = {};

    if (month && year) {
      const monthNumber = parseInt(month);
      const yearNumber = parseInt(year);

      const startDate = new Date(yearNumber, monthNumber - 1, 1);
      const endDate = new Date(yearNumber, monthNumber, 0, 23, 59, 59); // akhir bulan

      dateFilter = {
        transactionDate: {
          gte: startDate,
          lte: endDate,
        },
      };
    }

    const totalIncome = await db.transactions.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        userId,
        type: "income",
        ...dateFilter,
      },
    });

    const totalExpense = await db.transactions.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        userId,
        type: "expense",
        ...dateFilter,
      },
    });

    const income = Number(totalIncome._sum.amount ?? 0);
    const expense = Number(totalExpense._sum.amount ?? 0);
    const balance = income - expense;

    return NextResponse.json({
      income,
      expense,
      balance,
      month: month ? parseInt(month) : null,
      year: year ? parseInt(year) : null,
    });
  } catch (error) {
    console.error("Failed to fetch statistics:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
