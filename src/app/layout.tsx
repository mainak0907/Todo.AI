import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Todo.AI",
  description: "Best AI Powered ToDo List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow p-4 md:p-8 lg:p-16">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HSG764N67E"
      />
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-HSG764N67E');`}
      </Script>
    </html>
  );
}
