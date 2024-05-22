import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Lucas Fernandes - Opagodev",
  description: "O site de um dev pagodeiro e criador de conteúdo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <div className="container mx-auto px-16 py-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
