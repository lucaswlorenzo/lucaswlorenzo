import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RefreshRedirect from "./components/RefreshRedirect";
import HandsImagePreloader from "./components/HandsImagePreloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas W. Lorenzo",
  description: "Photography · Styling · Art Direction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/media/hands/hands1.jpg" as="image" />
        <link rel="preload" href="/media/hands/hands2.jpg" as="image" />
        <link rel="preload" href="/media/hands/hands3.jpg" as="image" />
        <link rel="preload" href="/media/hands/hands4.jpg" as="image" />
        <link rel="preload" href="/media/hands/hands5.jpeg" as="image" />
        <link rel="preload" href="/media/About Page/headshots/lucaslorenzo_headshotportrait.png" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <RefreshRedirect />
        <HandsImagePreloader />
        {children}
      </body>
    </html>
  );
}
