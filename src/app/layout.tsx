import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import CursorGlow from "@/components/ui/CursorGlow";


const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "NEXORA | Tecnología que impulsa tu negocio",
  description:
    "Desarrollo de software, inteligencia artificial y automatización para empresas modernas.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="es">

      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >

        {children}

        <CursorGlow />

      </body>

    </html>

  );

}