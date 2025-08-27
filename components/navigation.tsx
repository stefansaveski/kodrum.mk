"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Menu, X, GraduationCap } from "lucide-react";

export function Navigation() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: "home", href: "/" },
    { key: "events", href: "#events" },

    // { key: "courses", href: "/courses" },
    { key: "about", href: "/about" },
    { key: "promo", href: "/promo" },
    // { key: "blog", href: "/blog" },
    // { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
    { key: "faq", href: "/faq" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
            <img src="/logos/kodrum.png" alt="Kodrum" className="h-8 w-8" />
            <span className="font-bold text-xl text-teal-600">Kodrum</span>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                {item.key === "promo" ? "Promo Packs" : t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/courses">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold">
                {t("nav.enrollNow")}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.key === "promo" ? "Promo Packs" : t(`nav.${item.key}`)}
                </Link>
              ))}
              <Link href="/courses">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold w-full mt-4">
                  {t("nav.enrollNow")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
