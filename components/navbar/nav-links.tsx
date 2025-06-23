import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  pathname: string;
}

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/transactions", label: "Transactions" },
  //   { href: "/analytics", label: "Analytics" },
  //   { href: "/categories", label: "Categories" },
  //   { href: "/settings", label: "Settings" },
];

export default function NavLinks({ pathname }: NavLinksProps) {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "px-3 py-2 text-sm font-medium transition-colors",
            pathname === link.href
              ? "font-semibold text-primary tracking-tight"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
