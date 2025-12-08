"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20 lg:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/banners/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-teal-700/60"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-white">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed ">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#pripremi">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-400 text-white font-semibold px-8 py-4 text-lg"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className=" text-teal-700 hover:bg-teal-50 px-8 py-4 text-lg bg-white"
              >
                <Play className="mr-2 h-5 w-5" />
                {t("hero.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
