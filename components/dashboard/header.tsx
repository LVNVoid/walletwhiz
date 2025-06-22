import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useTransactionModal } from "@/hooks/use-transaction-modal";

const Header = () => {
  const onOpen = useTransactionModal((state) => state.onOpen);

  return (
    <section className="flex flex-col gap-4 items-start justify-between sm:flex-row sm:items-center p-4">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Welcome to WalletWhiz 👋
        </h1>
        <p className="text-sm max-w-md text-muted-foreground">
          Your personal finance companion to help track, understand, and manage
          your spending smarter.
        </p>
      </div>
      <Button
        variant="outline"
        className="flex items-center gap-2 self-start sm:self-auto"
        onClick={onOpen}
      >
        <PlusCircle className="w-5 h-5" />
        Add Transaction
      </Button>
    </section>
  );
};

export default Header;
