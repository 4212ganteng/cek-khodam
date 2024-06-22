import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khodam mu | Cek Khodam dalam diri kamu",
  description: "cek khodam dalam diri kamu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >{children}
        <footer>
          <div className="text-center    mb-3">
            <a href="https://www.instagram.com/azizmuslim920/">Touchme <span className="text-blue-400">Aziz Muslim</span></a>
          </div>
        </footer>
      </body>

    </html>
  );
}
