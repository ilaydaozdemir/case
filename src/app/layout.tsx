import type { Metadata } from "next";
import posts from "@/data/posts.json";
import { Post } from "@/types/post";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-saira",
});

const firstPost = (posts as Post[])[0];
export const metadata: Metadata = {
  title: firstPost.attributes.seo.metaTitle,
  description: firstPost.attributes.seo.metaDescription,
  alternates: {
    canonical: firstPost.attributes.seo.canonicalURL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
