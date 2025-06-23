"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useAuth, UserButton } from "@clerk/nextjs";
import NavLinks from "./nav-links";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";
import { MobileMenu } from "./mobile-menu";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b bg-background/40 backdrop-blur">
      <div className="mx-auto max-w-screen-xl px-4 flex h-16 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          {isSignedIn && (
            <div className="hidden md:flex items-center gap-2">
              <NavLinks pathname={pathname} />
            </div>
          )}

          {/* Theme Toggle */}
          {mounted && <ThemeToggle theme={theme} setTheme={setTheme} />}

          {/* User */}
          {isSignedIn && <UserButton />}

          {/* Mobile Menu */}
          {isSignedIn && (
            <div className="md:hidden">
              <MobileMenu />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
