import type { Metadata } from "next";
import { Playfair_Display, Lora, Courier_Prime } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const courier = Courier_Prime({
  weight: ["400", "700"],
  variable: "--font-courier",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Rahul Chronicle | Developer Portfolio",
  description: "A vintage newspaper and editorial spread portfolio showcasing interactive design, creative development, and full-stack software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${courier.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-yellow-200 dark:selection:bg-yellow-800 text-ink dark:text-ink-light bg-paper dark:bg-paper-dark transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
