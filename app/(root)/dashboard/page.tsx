import DashboardStats from "@/components/dashboard/dashboard-stats-section";
import { FinanceChart } from "@/components/dashboard/finance-chart";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { HeaderPage } from "@/components/ui/header-page";

export default function DashboardPage() {
  return (
    <div className="space-y-4 py-4 px-2 sm:px-4">
      <HeaderPage
        title="Welcome to WalletWhiz 👋"
        description="Your personal finance companion to help track, understand, and manage your spending smarter."
      />
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FinanceChart />
        <RecentTransactions />
      </div>
    </div>
  );
}
