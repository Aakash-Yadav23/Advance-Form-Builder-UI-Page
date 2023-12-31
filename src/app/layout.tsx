import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form-Builder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="flex">
          <div className="side-bar">
            </div>
          <div className="main w-full">
          {children}
          </div>
          <div className="side-bar">

          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
