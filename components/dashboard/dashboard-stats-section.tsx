"use client";

import React, { useEffect, useState } from "react";
import { StatsCard } from "../ui/stats-card";
import api from "@/lib/axios";
import { formatRupiah } from "@/lib/utils";
import { Stats } from "@/types/stats";

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

  if (loading || !stats) return <div>Loading...</div>;

  return (
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
  );
};

export default DashboardStats;
