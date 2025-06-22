import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const recentTransactions = await db.transactions.findMany({
      where: { userId },
      orderBy: { transactionDate: "desc" },
      take: 5,
    });

    return NextResponse.json(recentTransactions);
  } catch (error) {
    console.error("[RECENT_TRANSACTIONS_GET ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
