import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      {/* Logo */}
      <Image
        src="/images/WalletWhiz.png"
        alt="WalletWhiz Logo"
        width={150}
        height={150}
        className="mb-6"
      />

      {/* Hero */}
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Take Control of Your Spending with{" "}
          <span className="text-[#00A550]">WalletWhiz</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Track your expenses, set budgets, and visualize your financial habits
          — all in one simple and powerful tool.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/login">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
