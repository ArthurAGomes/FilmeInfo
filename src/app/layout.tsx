import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/navbar";
import MovieList from "@/components/MovieList";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App-Filmes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}
      <NavBar/>
      <MovieList/>
      </body>
      
    </html>
  );
}
