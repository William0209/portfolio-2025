import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ogImage from "../../public/assets/OG-Image.png";

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
    title: "William Janssen | Fullstack Web Developer Portfolio",
    description:
      "Stockholm-based fullstack developer specializing in Next.js, React, and modern web technologies. Building high-performance web applications with clean code.",
    type: "website",
    url: "https://www.wj-portfolio.dev/",
    siteName: "William Janssen Portfolio",
    locale: "en_US",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "William Janssen - Fullstack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William Janssen | Fullstack Web Developer",
    description: "Stockholm-based fullstack developer specializing in Next.js and modern web technologies.",
    images: [ogImage.src],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "William Janssen" }],
  creator: "William Janssen",
  publisher: "William Janssen",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "William Janssen",
    jobTitle: "Fullstack Web Developer",
    description: "Stockholm-based fullstack developer specializing in Next.js, React, and modern web technologies",
    url: "https://www.wj-portfolio.dev/",
    sameAs: ["https://github.com/William0209", "https://www.linkedin.com/in/william-janssen26/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stockholm",
      addressCountry: "Sweden",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Framer Motion",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Vakansa AB",
    },
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${robotoMono.variable} ${satoshiRegular.variable} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
