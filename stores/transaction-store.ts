import { create } from "zustand";
import { Transaction } from "@/types/transaction";
import api from "@/lib/axios";

interface TransactionStore {
  transactions: Transaction[];
  fetchTransactions: () => Promise<void>;
  updateTransaction: (updated: Transaction) => void;
  deleteTransaction: (id: string) => void;
  addTransaction: (data: Transaction) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],

  fetchTransactions: async () => {
    const res = await api.get("/api/transactions");
    set({ transactions: res.data });
  },

  updateTransaction: (updated) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === updated.id ? updated : t
      ),
    })),

  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== id),
    })),

  addTransaction: (data) =>
    set((state) => ({
      transactions: [data, ...state.transactions],
    })),
}));
