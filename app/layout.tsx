import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "./components/NextAuthProviders";

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Proyecto de clon de Netflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
