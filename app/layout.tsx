import type { Metadata } from "next";
import DigicoreBackdrop from "./components/DigicoreBackdrop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachel Yu - Digital Portfolio",
  description:
    "A personal web archive of projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DigicoreBackdrop />
        {children}
      </body>
    </html>
  );
}
