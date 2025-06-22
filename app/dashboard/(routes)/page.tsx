"use client";

import CardStatsSection from "@/components/dashboard/card-stats-section";
import { FinanceChart } from "@/components/dashboard/finance-chart";
import Header from "@/components/dashboard/header";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { TransactionModal } from "@/components/modals/transaction-modal";

export default function DashboardPage() {
  return (
    <div className="space-y-4 py-4 px-2 sm:px-4">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardStatsSection />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FinanceChart />
        <RecentTransactions />
      </div>
      <TransactionModal />
    </div>
  );
}
