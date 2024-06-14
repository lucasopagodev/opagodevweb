import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Script from "next/script";
import Footer from "@/components/footer/page";

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
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55Q4BH4R');`
          }}
        >
        </Script>
      </head>
      <body className={montserrat.className}>
        <div className="container mx-auto px-16 py-8">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
