import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  baseDomain,
  blogDesc,
  blogName,
  blogThumbnailURL,
} from "@/config/const";
import Sidebar from "@/components/sidebar/Sidebar";
import { getCategoryDetailList, getSortedPostList } from "@/lib/post";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: "DevLog - PENTAGON",
  description: "펜타곤의 데브로그입니다. 개발 관련 글을 주로 올리고 있습니다",
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: [blogThumbnailURL],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogName,
    description: blogDesc,
    images: [blogThumbnailURL],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await getSortedPostList();
  const category = await getCategoryDetailList();

  return (
    <html lang="ko-KR" className="h-full">
      <body className={inter.className + " h-full bg-slate-50"}>
        <Sidebar posts={posts} pinnedCategory={category} />
        <main className="py-10 lg:pl-72 bg-slate-50">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
        <GoogleAnalytics gaId="G-GC20TPCG0Z" />
      </body>
    </html>
  );
}
