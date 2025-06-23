import TransactionTable from "@/components/transactions/table/transaction-table";
import { HeaderPage } from "@/components/ui/header-page";
import React from "react";

const TransactionsPage = () => {
  return (
    <div className="space-y-4 py-4 px-2 sm:px-4">
      <HeaderPage
        title="All Transactions"
        description="Here you can see all your transactions."
        // buttonText="Add Transaction"
        // onButtonClick={onOpen}
        // buttonIcon={<PlusCircle className="w-5 h-5" />}
      />
      <TransactionTable />
    </div>
  );
};

export default TransactionsPage;
