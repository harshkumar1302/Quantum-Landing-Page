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



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantumRealm AI Labs | AI-Powered Creator Operating Systems",
  description: "The premier AI lab engineering predictive infrastructure and operating systems like Creonnect for creators, brands, and agencies to automate Instagram growth, DMs, and community management.",
  keywords: [
    "AI Creator OS", "Instagram Growth Platform", "AI Agency Solutions", "Brand Automation AI",
    "Creonnect", "Quantum Engine API", "Creator Economy Infrastructure", "Predictive AI Ecosystems", "Automated DMs"
  ],
  openGraph: {
    title: "QuantumRealm AI Labs",
    description: "Building the AI infrastructure powering the next era of creators, including Creonnect.",
    type: "website",
    siteName: "QuantumRealm AI Labs",
    images: [
      {
        url: "/images/products/creonnect-ui.png",
        width: 1200,
        height: 630,
        alt: "QuantumRealm AI Labs - Building the Creator OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumRealm AI Labs",
    description: "Engineering generative UI and predictive ecosystems for the creator economy.",
    images: ["/images/products/creonnect-ui.png"],
  }
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TorchCursor />
          <div className="noise-overlay" />
          <Loader />
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
