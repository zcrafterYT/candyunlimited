<<<<<<< HEAD
<<<<<<< HEAD
"use client"
=======
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import GlobalState from '@/context'
import Navbar from '@/components/navbar'
>>>>>>> bb43738 (WIP)

import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import GlobalState from "@/context";
import Navbar from "@/components/navbar";
import CookieConsentBanner from "@/components/cookieBanner";

<<<<<<< HEAD
=======
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import GlobalState from "@/context";
import Navbar from "@/components/navbar";

>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <head>
      <title>🍬Dieters Candy Shop🍬</title>
      </head>
=======
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main className="flex min-h-screen flex-col mt-[80px]">
            {children}
          </main>
<<<<<<< HEAD
          <CookieConsentBanner/>
=======
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar/>
          <main>{children}</main>
>>>>>>> bb43738 (WIP)
=======
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
        </GlobalState>
      </body>
    </html>
  );
}
