import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kadir Nuhovic - Portfolio",
  description: "Personal portfolio showcasing web development projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
