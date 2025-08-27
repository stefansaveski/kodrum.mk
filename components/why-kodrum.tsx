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
            Why Choose Kodrum?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover what makes us Macedonia's premier technology education
            center
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🎯",
              title: "Expert Instructors",
              description:
                "Learn from industry professionals with real-world experience",
            },
            {
              icon: "🚀",
              title: "Modern Curriculum",
              description:
                "Stay ahead with cutting-edge technologies and methodologies",
            },
            {
              icon: "👥",
              title: "Small Class Sizes",
              description:
                "Personalized attention with maximum 12 students per class",
            },
            {
              icon: "💼",
              title: "Career Support",
              description:
                "Job placement assistance and career guidance for all graduates",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center group">
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
