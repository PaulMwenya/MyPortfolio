import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Mwenya",
  description:
    "Paul Mwenya is a Software Engineer and Computer Science graduate specialized in modern web development. He builds fast, scalable, and user-focused applications using React, Next.js, JavaScript, and Tailwind CSS.",
  verification: {
    google: "88CGk6CKPL99wo2WtrAYj2JXlr9nvXKFba2lg9SaI4c",
  },
  openGraph: {
    title: "Paul Mwenya | Software Engineer",
    description:
      "Software Engineer specializing in modern web development using React, Next.js, and Tailwind CSS.",
    url: "https://mwenyapaul.vercel.app",
    siteName: "Paul Mwenya Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paul Mwenya Portfolio",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
