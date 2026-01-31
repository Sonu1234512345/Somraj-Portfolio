import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import "./remixicon.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import RouteLoader from "./components/RouteLoader";
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Somraj Singh | Frontend Developer & UI Engineer",
  description: "Frontend Developer specializing in modern, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS. Passionate about clean UI, smooth UX, and scalable design systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <RouteLoader />
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
