import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
  title: "William Janssen | Fullstack Web Developer Portfolio Site",
  description:
    "Stockholm-based fullstack developer specializing in Next.js. Passionate about building web apps with clean code and great performance. Check out my projects!",
  keywords: ["web development", "Fullstack Developer", "React", "Next.js", "William Janssen"],
  openGraph: {
    title: "William Janssen | Portfolio",
    description: "Fullstack developer based in Stockholm",
    type: "website",
  },
  robots: "index",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${satoshiRegular.variable} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
