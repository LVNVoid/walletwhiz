import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default async function DashboardPage() {
  return (
    <div className="space-y-8 px-6 sm:px-0">
      {" "}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
            Welcome to WalletWhiz 👋
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mt-1">
            Your personal finance companion to help track, understand, and
            manage your spending smarter.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <PlusCircle className="w-5 h-5" />
          Add Transaction
        </Button>
      </section>
    </div>
  );
}
