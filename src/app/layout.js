import MenuProvider from "@/context/menu/menuContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dominos",
  description:
    "Domino's is OPEN to serve you. Order all your favorite pizzas and we will ensure Zero contact delivery for all order.",
  icons: {
    icon: [
      { url: "/Dominos/dominos.png" },
      new URL("/Dominos/dominos.png", "https://example.com"),
    ],

    shortcut: "/Dominos/dominos.png",
    apple: "/Dominos/dominos.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/Dominos/dominos.png",
    },
    themeColor: '#005491',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <meta name="theme-color" content="#005491" />
        <meta name="msapplication-navbutton-color" content="#005491" />
        <link rel="icon" href="/Dominos/dominos.png" />
      </Head> */}
      <body className={inter.className}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
