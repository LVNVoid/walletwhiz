import { Button } from "@/components/ui/button";
import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold">403</h1>
      <h1 className="text-2xl font-bold"> Unauthorized</h1>
      <p className="text-muted-foreground">
        You do not have access to this page.
      </p>
      <Button asChild size="lg" className="mt-4">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default UnauthorizedPage;
