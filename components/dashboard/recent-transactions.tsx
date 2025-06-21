"use client";

import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Define transaction type
type Transaction = {
  id: string;
  userId: string;
  amount: number;
  description?: string;
  type: "income" | "expense";
  category: string;
  transactionDate: string;
};

// Dummy transactions
const dummyTransactions: Transaction[] = [
  {
    id: "1",
    userId: "user1",
    amount: 5000000,
    description: "Salary",
    type: "income",
    category: "Work",
    transactionDate: "2024-06-01T00:00:00.000Z",
  },
  {
    id: "2",
    userId: "user1",
    amount: 200000,
    description: "Groceries",
    type: "expense",
    category: "Food",
    transactionDate: "2024-06-03T00:00:00.000Z",
  },
  {
    id: "3",
    userId: "user1",
    amount: 150000,
    description: "Internet Bill",
    type: "expense",
    category: "Utilities",
    transactionDate: "2024-06-05T00:00:00.000Z",
  },
  {
    id: "4",
    userId: "user1",
    amount: 1000000,
    description: "Freelance Project",
    type: "income",
    category: "Side Job",
    transactionDate: "2024-06-06T00:00:00.000Z",
  },
  {
    id: "5",
    userId: "user1",
    amount: 100000,
    description: "Transport",
    type: "expense",
    category: "Commute",
    transactionDate: "2024-06-07T00:00:00.000Z",
  },
];

export function RecentTransactions() {
  const transactions = dummyTransactions;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{tx.description || tx.category}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(tx.transactionDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {tx.type === "income" ? (
                <ArrowDownCircle className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowUpCircle className="h-4 w-4 text-red-500" />
              )}
              <span
                className={cn(
                  "text-sm font-medium",
                  tx.type === "income" ? "text-green-600" : "text-red-600"
                )}
              >
                {formatRupiah(tx.amount)}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Format number to IDR
function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}
