import type { Metadata } from "next";
import { Geist, Geist_Mono, Bona_Nova } from "next/font/google";
import "./globals.css";

const bonaNova = Bona_Nova({
  variable: "--font-bona-nova",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const userPortofolio = {
  name: "Ahmad Ansori",
  desc: "portofolio with hollow knight theme",
};

export const metadata: Metadata = {
  title: `${userPortofolio.name}`,
  description: `${userPortofolio.desc}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${bonaNova.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
