import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Durga Prasad Kakileti — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack, React, Next.js, and Python. Building scalable web applications with modern technologies. Let's create something amazing together.",
  keywords: [
    "Durga Prasad Kakileti",
    "full stack developer",
    "MERN stack",
    "react",
    "next.js",
    "python",
    "mongodb",
    "node.js",
    "software engineer",
    "web developer",
    "portfolio",
    "india",
    "andhra pradesh",
    "rajahmundry",
    "frontend developer",
    "backend developer",
    "javascript",
    "typescript",
  ],
  openGraph: {
    title: "Durga Prasad Kakileti — Full Stack Developer",
    description:
      "Full Stack Developer passionate about building scalable web applications using MERN stack and modern technologies. Delivering efficient solutions that drive business growth and enhance user experiences.",
    url: "https://durgaprasadkakileti.vercel.app",
    siteName: "Durga Prasad Kakileti Portfolio",
    images: [
      {
        url: "/PROFILE_PIC.png", // Update with your actual image path
        width: 1200,
        height: 630,
        alt: "Durga Prasad Kakileti — Full Stack Developer",
      },
      {
        url: "/PROFILE_PIC.png", // Update with your actual image path
        width: 800,
        height: 800,
        alt: "Durga Prasad Kakileti — Full Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durga Prasad Kakileti — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, React, Next.js, and Python. Building scalable web applications with modern technologies.",
    creator: "@durgaprasadkakileti", // Update with your actual Twitter handle
    images: ["/PROFILE_PIC.png"], // Update with your actual image path
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/K-black.png" /> 
      </head>
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}