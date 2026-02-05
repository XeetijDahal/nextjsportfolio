"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeProvider } from "next-themes";
import detailsJson from "./data/datas.json";
import { ThemeToggle } from "./components/ThemeToggle";
import "./globals.css";
import { useState,useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const hideNavbar = pathname === "/Login" || pathname === "/signup";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Kshitij Dahal</title>
        <meta name="description" content="Personal site & portfolio" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviderWrapper>
          {!hideNavbar && <motion.nav
            variants={{
              visible: { y: 0 },
              hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] py-4 px-4 sm:px-6 z-50 shadow-sm"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <Link 
                href="/" 
                className="flex items-center gap-3 text-lg sm:text-xl font-bold text-[var(--foreground)]"
              >
                Kshitij Dahal
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center space-x-6">
                  {detailsJson.navLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className="text-[var(--color-gray-600)] hover:text-[var(--foreground)] text-sm font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <ThemeToggle />
                
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-[var(--muted)] text-[var(--foreground)]"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 border-t border-[var(--muted)] pt-4 overflow-hidden"
                >
                  <div className="flex flex-col space-y-3">
                    {detailsJson.navLinks.map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href} 
                        onClick={handleLinkClick}
                        className="text-[var(--color-gray-700)] hover:text-[var(--foreground)] py-2 px-2 rounded-lg hover:bg-[var(--color-gray-100)]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>}
          <main className="bg-[var(--background)]">
            {children}
          </main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
