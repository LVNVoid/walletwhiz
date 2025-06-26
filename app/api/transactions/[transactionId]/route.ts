import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { transactionId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const { transactionId } = context.params;

    const transaction = await db.transactions.findFirst({
      where: { userId, id: transactionId },
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

export async function DELETE(
  req: NextRequest,
  context: { params: { transactionId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const { transactionId } = context.params;

    const deleted = await db.transactions.deleteMany({
      where: { userId, id: transactionId },
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

export async function PATCH(
  req: NextRequest,
  context: { params: { transactionId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const { transactionId } = context.params;
    const body = await req.json();
    const { name, amount, description, type, category, transactionDate } = body;

    const updated = await db.transactions.update({
      where: { userId, id: transactionId },
      data: {
        name,
        amount: parseFloat(amount),
        type,
        category,
        transactionDate: new Date(transactionDate),
        description,
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
