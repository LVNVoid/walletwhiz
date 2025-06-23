"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Transaction = {
  id: string;
  userId: string;
  amount: number;
  description?: string;
  type: "income" | "expense";
  category: string;
  transactionDate: string;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "transactionDate",
    header: "Date",
  },
];
