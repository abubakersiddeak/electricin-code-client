"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/provider/ThemeProvider";
import { navLinks } from "@/data/electrician-data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollActiveLink, setScrollActiveLink] = useState("#hero");
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  // Calculate active link based on pathname (no setState in effect)
  const pathnameActiveLink = useMemo(() => {
    if (isHomePage) {
      return null; // Use scroll-based active link
    }

    if (pathname.includes("/all-projects") || pathname.includes("/projects/")) {
      return "#projects";
    }

    return "";
  }, [pathname, isHomePage]);

  // Final active link (either from pathname or scroll)
  const activeLink =
    pathnameActiveLink !== null ? pathnameActiveLink : scrollActiveLink;

  // Scroll tracking (only on home page)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only track sections on home page
      if (isHomePage) {
        let currentSection = "";
        navLinks.forEach((link) => {
          const sectionId = link.href.substring(1);
          const section = document.getElementById(sectionId);
          if (section && window.scrollY >= section.offsetTop - 100) {
            currentSection = link.href;
          }
        });
        setScrollActiveLink(currentSection || "#hero");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Generate link href based on current page
  const getLinkHref = (link: (typeof navLinks)[0]) => {
    if (isHomePage) {
      return link.href;
    } else {
      return `/${link.href}`;
    }
  };

  // Check if link is active
  const isLinkActive = (link: (typeof navLinks)[0]) => {
    return activeLink === link.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-50/95 dark:bg-mest-gray-1/95 backdrop-blur-lg shadow-lg border-b border-slate-200/80 dark:border-mest-gray-3/30 py-2 sm:py-3"
          : "bg-slate-50/90 dark:bg-mest-gray-1/90 backdrop-blur-sm border-b border-slate-200/50 dark:border-mest-gray-2/20 py-3 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="SparkFix Electricals Home"
          >
            <div className="bg-linear-to-br from-mest-amber-6 to-mest-amber-7 dark:from-mest-amber-6 dark:to-mest-amber-8 p-1.5 sm:p-2 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-md group-hover:shadow-lg group-hover:shadow-mest-amber-6/40 dark:group-hover:shadow-mest-amber-7/40">
              <Zap
                className="w-4 h-4 sm:w-4 sm:h-4 text-white"
                aria-hidden="true"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-slate-800 to-slate-600 dark:from-mest-gray-10 dark:to-mest-gray-9 bg-clip-text text-transparent group-hover:from-mest-amber-6 group-hover:to-mest-amber-7 dark:group-hover:from-mest-amber-6 dark:group-hover:to-mest-amber-7 transition-all duration-300">
                SparkFix
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.href}
                  href={getLinkHref(link)}
                  className={`relative px-3 xl:px-4 py-2 font-medium transition-all duration-300 rounded-lg flex items-center gap-2 group text-sm xl:text-base ${
                    isActive
                      ? "text-mest-amber-6 dark:text-mest-amber-7 bg-mest-amber-6/5 dark:bg-mest-amber-7/10"
                      : "text-slate-700 dark:text-mest-gray-9 hover:text-slate-900 dark:hover:text-mest-gray-10 hover:bg-white dark:hover:bg-mest-gray-2"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                    aria-hidden="true"
                  />
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-mest-amber-6 to-mest-amber-7 dark:from-mest-amber-6 dark:to-mest-amber-8 transition-all duration-300 rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 text-slate-700 dark:text-mest-gray-10 hover:bg-white dark:hover:bg-mest-gray-2 hover:text-mest-amber-6 dark:hover:text-mest-amber-6 transition-all duration-300 hover:scale-110 rounded-full"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <Sun className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </nav>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-slate-700 dark:text-mest-gray-10 hover:bg-white dark:hover:bg-mest-gray-2 transition-all duration-300 rounded-full h-9 w-9"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 dark:text-mest-gray-10 hover:bg-white dark:hover:bg-mest-gray-2 transition-all duration-300 rounded-full h-9 w-9"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="flex flex-col gap-2 pb-4 border-t border-slate-200 dark:border-mest-gray-3/30 pt-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.href}
                  href={getLinkHref(link)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 ${
                    isActive
                      ? "bg-linear-to-r from-mest-amber-6/10 to-mest-amber-7/10 dark:from-mest-amber-6/10 dark:to-mest-amber-7/10 text-mest-amber-6 dark:text-mest-amber-7"
                      : "text-slate-700 dark:text-mest-gray-9 hover:bg-white dark:hover:bg-mest-gray-2 hover:text-slate-900 dark:hover:text-mest-gray-10"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
