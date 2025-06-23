import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { transactionId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { transactionId } = params;

    if (!transactionId) {
      return new NextResponse("Transaction ID not provided", { status: 400 });
    }

    const transactions = await db.transactions.findFirst({
      where: {
        userId,
        id: transactionId,
      },
    });

    return NextResponse.json(transactions);
  } catch (error) {
    console.error("[TRANSACTION_GET ERROR]", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal Error",
      { status: 500 }
    );
  }
}
