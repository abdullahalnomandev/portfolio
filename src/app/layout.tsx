import Content from "@/components/content";
import Providers from "@/lib/Provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Al Noman ",
  description: "A full-stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang='en'>
        <body className='bg-[#f5f7ff] dark:bg-[#0f172a] dark:text-white'>
          <Content>{children}</Content>
        </body>
      </html>
    </Providers>
  );
}
