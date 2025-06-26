import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    transactionId: string;
  };
}

// GET /api/transactions/[transactionId]
export async function GET(req: NextRequest, context: Context) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { transactionId } = context.params;

    if (!transactionId) {
      return new NextResponse("Transaction ID not provided", { status: 400 });
    }

    const transaction = await db.transactions.findFirst({
      where: {
        userId,
        id: transactionId,
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    console.error("[TRANSACTION_GET ERROR]", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal Error",
      { status: 500 }
    );
  }
}

// DELETE /api/transactions/[transactionId]
export async function DELETE(req: NextRequest, context: Context) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { transactionId } = context.params;

    if (!transactionId) {
      return new NextResponse("Transaction ID not provided", { status: 400 });
    }

    const deleted = await db.transactions.deleteMany({
      where: {
        userId,
        id: transactionId,
      },
    });

    return NextResponse.json(deleted);
  } catch (error) {
    console.error("[TRANSACTION_DELETE ERROR]", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal Error",
      { status: 500 }
    );
  }
}

// PATCH /api/transactions/[transactionId]
export async function PATCH(req: NextRequest, context: Context) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { transactionId } = context.params;

    if (!transactionId) {
      return new NextResponse("Transaction ID not provided", { status: 400 });
    }

    const body = await req.json();
    const { name, amount, description, type, category, transactionDate } = body;

    const updated = await db.transactions.update({
      where: {
        id: transactionId,
        userId,
      },
      data: {
        name,
        amount: parseFloat(amount),
        description,
        type,
        category,
        transactionDate: new Date(transactionDate),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("[TRANSACTION_PATCH ERROR]", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Internal Error",
      { status: 500 }
    );
  }
}
