import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trello",
  description: "Copia de trello",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-gradient-to-r from-indigo-500 to-pink-700 flex flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
