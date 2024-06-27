import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <NavBar />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}