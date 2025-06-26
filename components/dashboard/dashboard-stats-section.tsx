"use client";

import React, { useEffect, useState } from "react";
import { StatsCard } from "../ui/stats-card";
import api from "@/lib/axios";
import { formatRupiah } from "@/lib/utils";
import { Stats } from "@/types/stats";
import { DashboardStatsSkeleton } from "./dashboard-stats-skeleton";

const DashboardStats = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/api/transactions/stats");
        setStats(res.data.stats);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading || !stats ? (
        <DashboardStatsSkeleton />
      ) : (
        <>
          <StatsCard
            title="Current Balance"
            value={formatRupiah(stats.balance)}
            iconName="Wallet"
            description="Your current cash position."
            isHighlighted={true}
          />

          <StatsCard
            title="Total Income"
            value={formatRupiah(stats.income.current)}
            iconName="ArrowUpCircle"
            description="Earnings recorded this month. Well done!"
            trend={stats.income.trend.direction ?? undefined}
            trendValue={
              stats.income.trend.direction
                ? `${stats.income.trend.value > 0 ? "+" : ""}${
                    stats.income.trend.value
                  }%`
                : "0%"
            }
          />

          <StatsCard
            title="Total Expenses"
            value={formatRupiah(stats.expense.current)}
            iconName="ArrowDownCircle"
            description="Your spending so far — stay in control."
            trend={stats.expense.trend.direction ?? undefined}
            trendValue={
              stats.expense.trend.direction
                ? `${stats.expense.trend.value > 0 ? "+" : ""}${
                    stats.expense.trend.value
                  }%`
                : "0%"
            }
          />
        </>
      )}
    </div>
  );
};

export default DashboardStats;
