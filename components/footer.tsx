"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const footerLinks = {
    courses: [
      { label: t("courses.categories.kids"), href: "/courses/kids" },
      { label: t("courses.categories.teens"), href: "/courses/teens" },
      {
        label: t("courses.categories.university"),
        href: "/courses/university",
      },
      { label: t("courses.categories.adults"), href: "/courses/adults" },
    ],
    company: [
      { label: t("nav.about"), href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: t("nav.blog"), href: "/blog" },
      { label: t("nav.contact"), href: "/contact" },
    ],
    support: [
      { label: t("nav.faq"), href: "/faq" },
      { label: "Help Center", href: "/help" },
      { label: t("footer.privacy"), href: "/privacy" },
      { label: t("footer.terms"), href: "/terms" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-teal-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">Kodrum</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t("footer.description")}
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">{t("footer.newsletter")}</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500"
                />
                <Button className="bg-teal-500 hover:bg-teal-600 rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Courses */}
          {/* <div>
            <h4 className="font-semibold mb-4">{t("courses.title")}</h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Kodrum Educational Center. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
