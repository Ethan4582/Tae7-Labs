import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Navbar } from "@/src/components/navbar";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tae7-Labs",
  description: "Curated library of premium UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} font-mono antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}