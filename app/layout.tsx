import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Shaikh — Entry-Level DevOps Engineer",
  description: "Portfolio of Aman Shaikh, an Entry-Level DevOps Engineer specializing in AWS, Terraform, Docker, Kubernetes, and CI/CD.",
  keywords: ["DevOps", "AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Aman Shaikh", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} style={{ colorScheme: "dark" }}>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
