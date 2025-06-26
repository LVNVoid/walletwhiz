"use client";

import { useEffect, useState } from "react";
import Modal from "../ui/modal";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      title="Are you sure?"
      description="This action can't be undone"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button
          type="button"
          disabled={loading}
          variant="outline"
          onClick={onClose}
          aria-label="Cancel delete"
        >
          Cancel
        </Button>
        <Button
          type="button"
          disabled={loading}
          variant="destructive"
          onClick={onConfirm}
          aria-label="Confirm delete"
        >
          {loading ? <Loader2 className="animate-spin h-4 w-4" /> : <>Delete</>}
        </Button>
      </div>
    </Modal>
  );
};
