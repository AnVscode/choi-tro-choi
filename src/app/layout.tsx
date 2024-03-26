import "@/styles/globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import SystemDetect from "@/components/system-detect";
import { Badge } from "@/components/ui/badge";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const fontSans: NextFontWithVariable = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chơi Trò Chơi",
  description: "Chào mừng đến với chơi trò chơi",
  icons: "/next.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SpeedInsights />
        <Badge className="absolute right-0 top-0">
          Phiên bản 0.1.0 thử nghiệm
        </Badge>
        <Analytics />
        <SystemDetect />
        <main className="container h-full">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
