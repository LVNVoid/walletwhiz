import { create } from "zustand";

interface useTransactionModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onAfterClose?: () => void;
  setOnAfterClose: (fn: () => void) => void;
}

export const useTransactionModal = create<useTransactionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () =>
    set((state) => {
      if (state.onAfterClose) state.onAfterClose();
      return { isOpen: false };
    }),
  setOnAfterClose: (fn) => set({ onAfterClose: fn }),
}));
