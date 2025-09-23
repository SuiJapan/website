import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

// メタデータ
export const metadata: Metadata = {
  title: "Sui Japan Community - 日本のSui開発者コミュニティ",
  description:
    "Sui Japan Communityは日本のSuiブロックチェーン開発者のためのコミュニティです。最新の技術情報、イベント、リソースを提供しています。",
  generator: "v0.app",
  keywords: "Sui, ブロックチェーン, 開発者, コミュニティ, 日本, Move言語",
};

/**
 * RootLayout コンポーネント
 * @param param0 
 * @returns 
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
