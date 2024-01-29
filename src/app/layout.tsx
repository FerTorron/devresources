import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "src/components/header";
import HeaderMobile from "src/components/header-mobile";
import SideNav from "src/components/side-nav";
import PageWrapper from "src/components/page-wrapper";
import MarginWidthWrapper from "src/components/margin-width-wrapper";
const poppins = Poppins ({  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Resources",
  description: "A collection of resources for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className}`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
            
          </main>
        </div>
      </body>
    </html>
  );
}
