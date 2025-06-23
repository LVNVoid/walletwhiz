"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Tag,
  Calendar,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, formatRupiah } from "@/lib/utils";
import api from "@/lib/axios";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Transaction } from "@/types/transaction";

export function RecentTransactions() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await api.get("/api/transactions/recent");
        setTransactions(res.data);
      } catch (error) {
        console.error("Failed to fetch recent transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const LoadingSkeleton = () => (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-4 rounded-lg border"
        >
          <div className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
          <div className="text-right space-y-2">
            <Skeleton className="h-4 w-20 ml-auto" />
            <Skeleton className="h-3 w-16 ml-auto" />
          </div>
        </div>
      ))}
    </div>
  );

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-4 mb-4">
        <TrendingUp className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No transactions yet</h3>
      <p className="text-sm text-muted-foreground max-w-sm">
        Your recent transactions will appear here once you start adding them.
      </p>
    </div>
  );

  return (
    <Card className="w-full bg-background">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="">Recent Transactions</CardTitle>
            <CardDescription>
              Here&apos;s a list of your recent transactions.
            </CardDescription>
          </div>
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                router.push("/transactions");
              }}
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid gap-4 max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        {loading ? (
          <LoadingSkeleton />
        ) : transactions.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-2">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border bg-background p-4 transition-all duration-200",
                  "hover:shadow-md hover:border-primary/20 hover:bg-accent/5",
                  "sm:p-5"
                )}
              >
                {/* Background gradient effect */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-200",
                    tx.type === "income"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500"
                      : "bg-gradient-to-r from-red-500 to-rose-500"
                  )}
                />

                <div className="relative flex items-start justify-between gap-4">
                  {/* Left side - Icon and details */}
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    {/* Transaction type icon */}
                    <div
                      className={cn(
                        "flex-shrink-0 p-2.5 rounded-full transition-colors duration-200",
                        tx.type === "income"
                          ? "text-[#00A550] bg-[#00A550]/10"
                          : "text-red-500 bg-red-500/10"
                      )}
                    >
                      {tx.type === "income" ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                    </div>

                    {/* Transaction details */}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <h4 className="font-semibold text-sm sm:text-base text-foreground truncate">
                          {tx.description || tx.category}
                        </h4>
                        <Badge
                          variant="outline"
                          className="text-xs font-normal px-2 py-1 w-fit bg-background/50"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tx.category}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={tx.transactionDate}>
                          {new Date(tx.transactionDate).toLocaleDateString(
                            "id-ID",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </time>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Amount */}
                  <div className="flex-shrink-0 text-right">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      {tx.type === "income" ? (
                        <ArrowDownCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowUpCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <div
                      className={cn(
                        "font-bold text-sm sm:text-base transition-colors duration-200",
                        tx.type === "income"
                          ? "text-green-600 group-hover:text-green-700"
                          : "text-red-600 group-hover:text-red-700"
                      )}
                    >
                      {tx.type === "expense" && "-"}
                      {formatRupiah(tx.amount)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {tx.type === "income" ? "Income" : "Expense"}
                    </div>
                  </div>
                </div>

                {/* Progress indicator */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                    tx.type === "income" ? "bg-green-500" : "bg-red-500"
                  )}
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
