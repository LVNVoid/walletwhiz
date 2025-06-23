"use client";

import DashboardStats from "@/components/dashboard/dashboard-stats-section";
import { FinanceChart } from "@/components/dashboard/finance-chart";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { AddTransactionModal } from "@/components/modals/add-transaction-modal";
import { HeaderPage } from "@/components/ui/header-page";
import { useTransactionModal } from "@/hooks/use-transaction-modal";
import { PlusCircle } from "lucide-react";

export default function DashboardPage() {
  const onOpen = useTransactionModal((state) => state.onOpen);
  return (
    <div className="space-y-4 py-4 px-2 sm:px-4">
      <HeaderPage
        title="Welcome to WalletWhiz 👋"
        description="Your personal finance companion to help track, understand, and manage your spending smarter."
        buttonText="Add Transaction"
        onButtonClick={onOpen}
        buttonIcon={<PlusCircle className="w-5 h-5" />}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardStats />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FinanceChart />
        <RecentTransactions />
      </div>
      <AddTransactionModal />
    </div>
  );
}
