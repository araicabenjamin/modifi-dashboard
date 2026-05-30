import type { Metadata } from "next";
import "../styles/globals.scss";
import "../styles/tokens.scss";

export const metadata: Metadata = {
  title: "MODIFI Dashboard",
  description: "MODIFI Trade Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}