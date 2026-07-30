"use client";

import { ThemeToggle } from "./theme-toggle";
import { User } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-3 border-primary">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand dengan Ikon Profil */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-3 border-primary bg-primary flex items-center justify-center shadow-[3px_3px_0px_0px_var(--primary)] dark:shadow-[3px_3px_0px_0px_var(--primary)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[1px_1px_0px_0px_var(--primary)] transition-all duration-200">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-black text-foreground tracking-tight uppercase">
              Halo<span className="text-primary">Andika</span>
            </span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}