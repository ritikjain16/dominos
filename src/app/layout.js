import MenuProvider from "@/context/menu/menuContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {

// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/Dominos/dominos.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#005491" />
        <meta name="msapplication-navbutton-color" content="#005491" />
        <meta
          name="description"
          content="Domino's is OPEN to serve you. Order all your favorite pizzas and we will ensure Zero contact delivery for all order."
        />
        <link rel="apple-touch-icon" href="/Dominos/dominos.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Dominos</title>
      </head>
      <body className={inter.className}>
        <MenuProvider>{children}</MenuProvider>
      </body>
      <Script src="/myscript.js" />
    </html>
  );
}
