import { create } from "zustand";
import { Transaction } from "@/types/transaction";

interface EditTransactionModalStore {
  isOpen: boolean;
  transaction: Transaction | null;
  onOpen: (transaction: Transaction) => void;
  onClose: () => void;
}

export const useEditTransactionModal = create<EditTransactionModalStore>(
  (set) => ({
    isOpen: false,
    transaction: null,
    onOpen: (transaction) => set({ isOpen: true, transaction }),
    onClose: () => set({ isOpen: false, transaction: null }),
  })
);
