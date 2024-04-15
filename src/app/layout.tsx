import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans as NotoSans } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@providers/ThemeProvider";

import { Navbar, Sidebar } from "@wrappers";

import { Content } from "@container";
import { cn } from "@lib/utils";

const notoSans = NotoSans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Create AI Covers with your favorite voices",
  title: "Jammable | Create AI Covers with your favorite voices!",
};

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <html suppressHydrationWarning lang="en">
    <body className={cn("antialiased", notoSans.className)}>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Navbar />
        <div className="mt-y-pad p-4">
          <Sidebar />
          <Content>{children}</Content>
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
