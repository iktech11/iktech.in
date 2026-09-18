import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NODE_ENV === 'production' ? '/iktech.in' : '';

export const metadata: Metadata = {
  metadataBase: new URL("https://iktech11.github.io/iktech.in"),
  title: "iktech.in | Ultra-Premium Web & App Development Portfolio",
  description: "Welcome to iktech.in portfolio. Engineering bespoke, modern web and mobile applications with full-stack precision (BCA) and business growth strategy (MBA Finance).",
  keywords: [
    "iktech.in",
    "ik tech",
    "web development portfolio",
    "full stack developer portfolio",
    "Next.js developer",
    "React developer",
    "BCA graduate developer",
    "MBA finance web architect"
  ],
  authors: [{ name: "iktech.in" }],
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/favicon.png`, type: "image/png" },
      { url: `${basePath}/logo.png`, type: "image/png" },
    ],
    shortcut: `${basePath}/logo.png`,
    apple: `${basePath}/logo.png`,
  },
  openGraph: {
    title: "iktech.in | Ultra-Premium Web & App Development Portfolio",
    description: "Welcome to my portfolio. Crafting ultra-premium websites and applications tailored for you.",
    url: "https://iktech11.github.io/iktech.in",
    siteName: "iktech.in",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "iktech.in Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${basePath}/favicon.png`} type="image/png" />
        <link rel="icon" href={`${basePath}/logo.png`} type="image/png" />
        <link rel="apple-touch-icon" href={`${basePath}/logo.png`} />
        <link rel="shortcut icon" href={`${basePath}/logo.png`} />
      </head>
      <body className="bg-[#04060d] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
