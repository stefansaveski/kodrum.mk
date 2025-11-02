"use client";

import { useTranslation } from "react-i18next";



export function WhyKodrum() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("hero.why-kodrum")}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t("hero.why-kodrum-description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🎯",
              title: t("why.features.0.title"),
              description: t("why.features.0.description"),
            },
            {
              icon: "🚀",
              title: t("why.features.1.title"),
              description: t("why.features.1.description"),
            },
            {
              icon: "👥",
              title: t("why.features.2.title"),
              description: t("why.features.2.description"),
            },
            {
              icon: "💼",
              title: t("why.features.3.title"),
              description: t("why.features.3.description"),
            },
          ].map((feature, index) => (
            <div key={index} className="text-center group flex justify-between">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-105 border border-white/20">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
