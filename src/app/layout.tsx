import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased font-roboto`}>{children}</body>
    </html>
  );
}
