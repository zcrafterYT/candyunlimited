import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import GlobalState from "@/context";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main className="flex min-h-screen flex-col mt-[80px]">
            {children}
          </main>
        </GlobalState>
      </body>
    </html>
  );
}
