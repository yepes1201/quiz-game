// Next
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";

// Styles
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuizGame",
  description: "Compete with your friends answering cultural questions.",
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
        <section id="game">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
