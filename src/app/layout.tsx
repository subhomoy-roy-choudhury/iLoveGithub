import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iLoveGithub",
  description: "Collection of GitHub tools ",
  icons: {
    icon: "/icons/favicon.png",
  },
  openGraph: {
    title: "iLoveGithub",
    description:
      "A curated collection of magical tools built around GitHub — open a repo in VS Code, visualize it, generate AI-powered summaries, convert it to a podcast, and so much more.",
    url: "https://ilovegithub.oderna.in",
    siteName: "iLoveGithub",
    images: [
      {
        url: "https://ilovegithub.oderna.in/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iLoveGithub",
    description:
      "A curated collection of magical tools built around GitHub — open a repo in VS Code, visualize it, generate AI-powered summaries, convert it to a podcast, and so much more.",
    images: ["https://ilovegithub.oderna.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme script for preventing flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
          try {
            const savedTheme = localStorage.getItem("theme");
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const currentHour = new Date().getHours();
            const isEvening = currentHour >= 19 || currentHour < 7;

            let theme = "light";
            if (savedTheme === "dark" || savedTheme === "light") {
              theme = savedTheme;
            } else if (systemPrefersDark || isEvening) {
              theme = "dark";
            }

            if (theme === "dark") {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          } catch (_) {}
        })();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
