import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mac - Apple",
  description: "Explore the world of Mac. Check out MacBook Pro, MacBook Air, iMac, Mac mini, Mac Studio, and Mac Pro. Visit the Apple site to learn, buy, and get support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
