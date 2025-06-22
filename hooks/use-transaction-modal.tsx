import { create } from "zustand";

interface useTransactionModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useTransactionModal = create<useTransactionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
