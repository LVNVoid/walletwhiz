"use client";

import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns as baseColumns } from "./columns";
import { AlertModal } from "@/components/modals/alert-modal";
import toast from "react-hot-toast";
import { useTransactionStore } from "@/stores/transaction-store";

const TransactionTable = () => {
  const transactions = useTransactionStore((state) => state.transactions);
  const fetchTransactions = useTransactionStore(
    (state) => state.fetchTransactions
  );
  const deleteTransaction = useTransactionStore(
    (state) => state.deleteTransaction
  );
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const onConfirmDelete = async () => {
    if (!selectedId) return;
    setLoading(true);
    try {
      await fetch(`/api/transactions/${selectedId}`, { method: "DELETE" });
      toast.success("Transaction deleted");
      deleteTransaction(selectedId);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete transaction");
    } finally {
      setLoading(false);
      setOpen(false);
      setSelectedId(null);
    }
  };

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const columns = baseColumns({
    onDelete: handleDeleteClick,
  });

  return (
    <>
      <DataTable columns={columns} data={transactions} />
      <AlertModal
        isOpen={open}
        onClose={() => {
          if (!loading) {
            setOpen(false);
            setSelectedId(null);
          }
        }}
        onConfirm={onConfirmDelete}
        loading={loading}
      />
    </>
  );
};

export default TransactionTable;
