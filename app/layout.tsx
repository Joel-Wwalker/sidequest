import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIDEQUEST — A field guide to feeling different",
  description: "A curious field guide to substances, their effects, and the bodies we live in. Explore animated explainers, evidence, and plain-language science.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
