"use client";

import api from "@/lib/axios";
import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns as baseColumns } from "./columns";
import { AlertModal } from "@/components/modals/alert-modal";
import toast from "react-hot-toast";
import { Transaction } from "@/types/transaction";

const TransactionTable = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await api.get("/api/transactions");
      setData(res.data);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onConfirmDelete = async () => {
    if (!selectedId) return;
    setLoading(true);
    try {
      await api.delete(`/api/transactions/${selectedId}`);
      toast.success("Transaction deleted");
      await fetchData();
    } catch (error) {
      console.log(error);
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

  const columns = baseColumns({ onDelete: handleDeleteClick });

  return (
    <>
      <div>
        <DataTable columns={columns} data={data} />
      </div>

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
