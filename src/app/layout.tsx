import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Montserrat, JetBrains_Mono, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Peso de fontes a incluir
  variable: "--font-roboto", // Variável CSS para esta fonte
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Peso de fontes a incluir
  variable: "--font-poppins", // Variável CSS para esta fonte
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains", // Variável CSS para esta fonte
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat", // Variável CSS para esta fonte
});

export const metadata: Metadata = {
  title: "Mascot's Clinica Veterinária",
  description: "Sistema de gerenciamento de clinica veterinaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${roboto.variable} ${montserrat.variable} ${poppins.variable} ${jetBrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
