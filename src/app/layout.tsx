import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Loader } from "@/components/loader";
import { SmoothScroll } from "@/components/smooth-scroll";
import { TorchCursor } from "@/components/torch-cursor";
import { BackToHome } from "@/components/back-to-home";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantumrealm.ai"),
  title: {
    default: "QuantumRealm AI Labs | The Creator AI Operating System",
    template: "%s | QuantumRealm AI Labs"
  },
  description: "QuantumRealm AI Labs engineers the world's most sophisticated AI operating systems for the creator economy. Powering elite creators through autonomous DM management, predictive growth analytics, and decentralized infrastructure.",
  keywords: [
    "QuantumRealm AI Labs", "Creonnect AI", "Creator Operating System", "Autonomous AI Growth",
    "Predictive Creator Analytics", "AI Infrastructure for Brands", "Generative Engagement OS",
    "Social Media AI Automation", "Elite Creator Tools"
  ],
  authors: [{ name: "QuantumRealm AI Labs" }],
  creator: "QuantumRealm AI Labs",
  publisher: "QuantumRealm AI Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "QuantumRealm AI Labs | Engineering the Future of Interaction",
    description: "Discover the autonomous AI operating systems powering the next generation of digital-first economies.",
    url: "https://quantumrealm.ai",
    siteName: "QuantumRealm AI Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "QuantumRealm AI Labs - The Silicon Backbone of the Creator Economy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumRealm AI Labs",
    description: "The autonomous AI operating system designed for elite creators.",
    images: ["/images/og-main.png"],
    creator: "@QuantumRealmAI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body suppressHydrationWarning className="relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TorchCursor />
          <div className="noise-overlay" />
          <Loader />
          <BackToHome />
          <Navbar />
          <SmoothScroll>
            <main className="w-full flex-1 relative flex flex-col items-center">
              {children}
            </main>
          </SmoothScroll>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
