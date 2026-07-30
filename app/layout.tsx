import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halo Andika - Portfolio",
  description: "Personal portfolio website with neo-brutalism design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen pt-20 pb-8 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}