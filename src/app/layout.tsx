import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Książka o zespole \"Mazowsze\"",
  description: "Odkryj barwną historię Państwowego Zespołu Ludowego Pieśni i Tańca \u201cMazowsze\u201d w wyjątkowej, bogato ilustrowanej książce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${playfairDisplay.variable} ${roboto.variable} bg-[var(--background-color)] folk-pattern`}>
        {children}
      </body>
    </html>
  );
}
