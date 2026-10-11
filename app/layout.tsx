import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07080b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aman Shaikh — Entry-Level DevOps Engineer",
  description:
    "Portfolio of Aman Shaikh, an Entry-Level DevOps Engineer specializing in AWS Cloud Infrastructure, Terraform, Docker, Kubernetes, and CI/CD automation.",
  keywords: [
    "DevOps",
    "DevOps Engineer",
    "Entry-Level DevOps",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Aman Shaikh",
    "Linux",
    "Cloud Engineer",
    "Infrastructure as Code",
  ],
  authors: [{ name: "Aman Shaikh", url: "https://github.com/Shaikh-aman-47" }],
  creator: "Aman Shaikh",
  metadataBase: new URL("https://portfolio-seven-ruby-65.vercel.app"),
  openGraph: {
    title: "Aman Shaikh — Entry-Level DevOps Engineer",
    description:
      "Engineering resilient cloud infrastructure, Terraform automation, and containerized Kubernetes deployments.",
    url: "https://portfolio-seven-ruby-65.vercel.app",
    siteName: "Aman Shaikh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Shaikh — Entry-Level DevOps Engineer",
    description:
      "Specializing in AWS, Terraform, Docker, Kubernetes, and CI/CD infrastructure automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aman Shaikh",
  jobTitle: "Entry-Level DevOps Engineer",
  url: "https://portfolio-seven-ruby-65.vercel.app",
  sameAs: [
    "https://github.com/Shaikh-aman-47",
    "https://www.linkedin.com/in/shaikh-aman-322216376",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "India",
  },
  knowsAbout: [
    "Amazon Web Services (AWS)",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Amazon EKS",
    "Continuous Integration / Continuous Deployment (CI/CD)",
    "Linux",
    "Prometheus",
    "Grafana",
    "Infrastructure as Code",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} style={{ colorScheme: "dark" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col selection:bg-accent/20 selection:text-foreground">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
