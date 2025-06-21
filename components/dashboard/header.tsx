import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Welcome to WalletWhiz 👋</h1>
        <p className="text-sm max-w-md text-muted-foreground">
          Your personal finance companion to help track, understand, and manage
          your spending smarter.
        </p>
      </div>
      <Button className="flex items-center gap-2">
        <PlusCircle className="w-5 h-5" />
        Add Transaction
      </Button>
    </section>
  );
};

export default Header;
