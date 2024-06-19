import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

import { fonts } from './fonts'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yeucutit - Hair stylist specializing in barber cuts men and woman traditional and modern haircuts.",
  description: "Hair stylist specializing in barber cuts men and woman traditional and modern haircuts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={fonts.cormorant.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
