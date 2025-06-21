"use server";

import { db } from "@/lib/db";

export const getTransactions = async (userId: string) => {
  try {
    const transactions = await db.transactions.findMany({
      where: {
        userId,
      },
      orderBy: {
        transactionDate: "desc",
      },
    });

    return { success: true, transactions };
  } catch (error) {
    return { success: false, error };
  }
};
