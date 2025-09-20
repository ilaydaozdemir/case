import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { generateHomePageMetadata } from "@/utils/dynamicMetadata";
import Header from "@/components/Header";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

// JSON data'dan dinamik metadata oluşturma
export const metadata: Metadata = generateHomePageMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={saira.variable}>
      <body
        className="min-h-screen bg-black text-white"
        style={{
          overflowX: "hidden",
          maxWidth: "100vw",
        }}
      >
        <Header />
        <main style={{ overflowX: "hidden", maxWidth: "100vw" }}>
          {children}
        </main>
      </body>
    </html>
  );
}