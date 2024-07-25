import type { Metadata } from "next";
import "./globals.css";
import Content from "@/components/content";


export const metadata: Metadata = {
  title: "Abdullah Al Noman (Contact)",
  description: "A full-stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Content>{children}</Content>
      </body>
    </html>
  );
}
