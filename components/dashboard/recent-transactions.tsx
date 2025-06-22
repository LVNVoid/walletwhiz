"use client";

import { useEffect, useState } from "react";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import api from "@/lib/axios";

type Transaction = {
  id: string;
  userId: string;
  amount: number;
  description?: string;
  type: "income" | "expense";
  category: string;
  transactionDate: string;
};

export function RecentTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get("/api/transactions");
        setTransactions(response.data);
      } catch (error) {
        console.error("Failed to fetch recent transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading...</p>
        ) : transactions.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No transactions found.
          </p>
        ) : (
          transactions.map((tx) => (
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
          ))
        )}
      </CardContent>
    </Card>
  );
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}
