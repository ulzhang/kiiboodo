import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { isBrowser } from "react-device-detect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keyboard Layouts",
  description:
    "Seamlessly try QWERTY, Dvorak, and Colemak keyboard layouts on dummy text.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3XWS80C1HX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3XWS80C1HX');
        `}
      </Script>
      <body className={inter.className}>
        {children}
        {!isBrowser && (
          <p className="fixed w-full bg-blue-900 bottom-0 text-center py-2 text-lg">
            Sorry, this doesn't really work on mobile yet 😿
          </p>
        )}
      </body>
    </html>
  );
}
