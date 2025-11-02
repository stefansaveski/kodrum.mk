"use client";

import { useTranslation } from "react-i18next";

export function TechnologyLogos() {
  const { t } = useTranslation();
  
  const technologies = [
    { name: "Python", logo: "/logos/python.png" },
    { name: "Java", logo: "/logos/java.webp" },
    { name: "C", logo: "/logos/c.png" },
    { name: "C++", logo: "/logos/cpp.png" },
    { name: "C#", logo: "/logos/csharp.png" },
    { name: "HTML5", logo: "/logos/html.png" },
    { name: "CSS", logo: "/logos/css.svg" },
    { name: "JavaScript", logo: "/logos/js.png" },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t("technologies.title")}
          </h3>
          <p className="text-gray-600">
            {t("technologies.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center group">
              <img
                src={tech.logo || "/placeholder.svg"}
                alt={tech.name}
                className="w-12 h-12 md:w-16 md:h-16  transition-all duration-300 hover:scale-110"
              />
              <span className="text-xs md:text-sm text-gray-600 mt-2 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
