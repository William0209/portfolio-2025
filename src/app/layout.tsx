import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto-mono",
});

// Local Font (Satoshi)
const satoshiRegular = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WJ - Portfolio",
  description: "My portfolio for 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${satoshiRegular.variable} antialiased`}>{children}</body>
    </html>
  );
}
