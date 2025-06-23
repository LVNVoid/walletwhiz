"use client";

import { AddTransactionModal } from "@/components/modals/add-transaction-modal";
import TransactionTable from "@/components/transactions/table/transaction-table";
import { HeaderPage } from "@/components/ui/header-page";
import { useTransactionModal } from "@/hooks/use-transaction-modal";
import { PlusCircle } from "lucide-react";
import React from "react";

const TransactionsPage = () => {
  const onOpen = useTransactionModal((state) => state.onOpen);
  return (
    <div className="space-y-4 py-4 px-2 sm:px-4">
      <HeaderPage
        title="All Transactions"
        description="Here you can see all your transactions."
        buttonText="Add Transaction"
        onButtonClick={onOpen}
        buttonIcon={<PlusCircle className="w-5 h-5" />}
      />
      <TransactionTable />
      <AddTransactionModal />
    </div>
  );
};

export default TransactionsPage;
