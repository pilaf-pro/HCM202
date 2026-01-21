import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { PageTransition } from "@/components/page-transition";
import { ConfuciusChatbot } from "@/components/confucius-chatbot";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người",
  description:
    "Tìm hiểu về tư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người qua các bài viết, phân tích và tài liệu học thuật.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.className} font-sans`}
        suppressHydrationWarning={true}
      >
        <PageTransition>
          <Suspense fallback={null}>{children}</Suspense>
        </PageTransition>
        {/* <ConfuciusChatbot /> */}
        <Analytics />
      </body>
    </html>
  );
}
