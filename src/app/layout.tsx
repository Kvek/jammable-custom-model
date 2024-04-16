import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans as NotoSans } from "next/font/google";
import type { ReactNode } from "react";

import { TooltipProvider } from "@components/ui/tooltip";

import { ReduxProvider } from "@providers/ReduxProvider";
import { ThemeProvider } from "@providers/ThemeProvider";

import { Loader, Navbar, Sidebar, UploadDrawer } from "@wrappers";

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
      <ReduxProvider>
        <ThemeProvider disableTransitionOnChange attribute="class">
          <TooltipProvider>
            <Navbar />

            <div className="mt-y-pad p-4">
              <Sidebar />
              <Content>{children}</Content>
            </div>
            <UploadDrawer />

            <Loader />
          </TooltipProvider>
        </ThemeProvider>
      </ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
