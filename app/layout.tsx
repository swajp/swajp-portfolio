import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://swajp.drie.cz/"),
  title: "Miroslav Stejskal",
  description:
    "My porfolio website where you can find my projects and other links.",
  openGraph: {
    title: "Miroslav Stejskal",
    description: "",
    url: "https://swajp.drie.cz/",
    siteName: "Miroslav Stejskal",
    images: [
      {
        url: "/example.png",
        width: 800,
        height: 600,
        alt: "My porfolio website where you can find my projects and other links.",
      },
      {
        url: "/example.png",
        width: 1800,
        height: 1600,
        alt: "My porfolio website where you can find my projects and other links.",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <section className="h-full max-w-screen-lg mx-auto">
          <Navbar />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
