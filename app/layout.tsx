import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/portfolio-content";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full overflow-x-clip antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
