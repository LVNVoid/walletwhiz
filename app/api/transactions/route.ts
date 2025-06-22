import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { amount, description, type, category, transactionDate } = body;

    const transaction = await db.transactions.create({
      data: {
        userId,
        amount: parseFloat(amount),
        type,
        category,
        transactionDate: new Date(transactionDate),
        description,
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    console.error("[TRANSACTION_POST ERROR]", error);
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
}
