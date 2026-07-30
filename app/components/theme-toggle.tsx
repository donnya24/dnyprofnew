"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 border-3 border-primary bg-muted"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 border-3 border-primary bg-background shadow-[3px_3px_0px_0px_var(--primary)] dark:shadow-[3px_3px_0px_0px_var(--primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_var(--primary)] transition-all duration-200 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
}