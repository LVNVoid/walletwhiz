import React from "react";
import { StatsCard } from "../ui/stats-card";

const CardStatsSection = () => {
  return (
    <>
      <StatsCard
        title="Current Balance"
        value="Rp12.000.000"
        iconName="Wallet"
        description="Total available money"
        isHighlighted={true}
      />
      <StatsCard
        title="Total Expenses"
        value="Rp4.500.000"
        iconName="ArrowDownCircle"
        description="Total expenses this month"
        trend="down"
        trendValue="-8.2%"
      />
      <StatsCard
        title="Total Income"
        value="Rp6.000.000"
        iconName="ArrowUpCircle"
        description="Total income this month"
        trend="up"
        trendValue="+15.3%"
      />
    </>
  );
};

export default CardStatsSection;
