"use client";

import React, { useEffect, useState } from "react";
import { StatsCard } from "../ui/stats-card";

type Stats = {
  income: number;
  expense: number;
  balance: number;
  month: number | null;
  year: number | null;
};

const CardStatsSection = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const fetchStats = async () => {
      try {
        const res = await fetch(`/api/statistics?month=${month}&year=${year}`);
        const data = await res.json();

        console.log(data);
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <>
      <StatsCard
        title="Current Balance"
        value={formatRupiah(stats.balance)}
        iconName="Wallet"
        description="Total available money"
        isHighlighted={true}
      />
      <StatsCard
        title="Total Income"
        value={formatRupiah(stats.income)}
        iconName="ArrowUpCircle"
        description="Total income this month"
        trend="up"
        trendValue="+15.3%"
      />
      <StatsCard
        title="Total Expenses"
        value={formatRupiah(stats.expense)}
        iconName="ArrowDownCircle"
        description="Total expenses this month"
        trend="down"
        trendValue="-8.2%"
      />
    </>
  );
};

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default CardStatsSection;
