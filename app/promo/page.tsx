"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Users, Heart, Star, Gift, Percent } from "lucide-react";

export default function PromoPage() {
  const { t } = useTranslation();
  const [selectedPack, setSelectedPack] = useState(null);

  const promoPacks = [
    {
      id: "combo-structured-algorithms",
      title: t("promo.packs.combo.title"),
      description: t("promo.packs.combo.description"),
      courses: t("promo.packs.combo.courses", { returnObjects: true }) as string[],
      originalPrice: "5,000 MKD",
      discountPrice: "4,000 MKD",
      savings: "1,000 MKD",
      discount: "20%",
      icon: <Star className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
      features: t("promo.packs.combo.features", { returnObjects: true }) as string[],
      premium: true,
      timeLimit: t("promo.packs.combo.timeLimit"),
    },
    {
      id: "math-programming-bundle",
      title: t("promo.packs.mathProgramming.title"),
      description: t("promo.packs.mathProgramming.description"),
      courses: t("promo.packs.mathProgramming.courses", { returnObjects: true }) as string[],
      originalPrice: "5,000 MKD",
      discountPrice: "4,000 MKD",
      savings: "1,000 MKD",
      discount: "20%",
      icon: <Gift className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
      features: t("promo.packs.mathProgramming.features", { returnObjects: true }) as string[],
      popular: true,
    },
    {
      id: "friends-discount",
      title: t("promo.packs.friends.title"),
      description: t("promo.packs.friends.description"),
      courses: t("promo.packs.friends.courses", { returnObjects: true }) as string[],
      originalPrice: t("promo.packs.friends.originalPrice"),
      discountPrice: t("promo.packs.friends.discountPrice"),
      savings: t("promo.packs.friends.savings"),
      discount: "20%",
      icon: <Users className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
      features: t("promo.packs.friends.features", { returnObjects: true }) as string[],
      minParticipants: t("promo.packs.friends.minParticipants"),
    }
    // {
    //   id: "family-pack",
    //   title: "Family Learning Pack",
    //   description: "Perfect for families learning together",
    //   courses: ["Multiple Age-Appropriate Courses"],
    //   originalPrice: "Per Family Member: 3,000 MKD",
    //   discountPrice: "Per Family Member: 2,100 MKD",
    //   savings: "900 MKD each",
    //   discount: "30%",
    //   icon: <Heart className="h-8 w-8" />,
    //   color: "from-red-500 to-red-600",
    //   features: [
    //     "Courses for All Ages",
    //     "Family Study Sessions",
    //     "Progress Tracking",
    //     "Family Certificates",
    //     "Special Family Events",
    //   ],
    //   minParticipants: "3+ family members",
    // },
    // {
    //   id: "complete-developer",
    //   title: "Complete Developer Package",
    //   description: "Everything you need to become a developer",
    //   courses: [
    //     "Structured Programming",
    //     "Algorithms and Data Structures",
    //     "Web Development Fundamentals",
    //     "React & Node.js",
    //     "Database Design",
    //   ],
    //   originalPrice: "18,800 MKD",
    //   discountPrice: "13,200 MKD",
    //   savings: "5,600 MKD",
    //   discount: "30%",
    //   icon: <Percent className="h-8 w-8" />,
    //   color: "from-indigo-500 to-indigo-600",
    //   features: [
    //     "5 Complete Courses",
    //     "12 Months Access",
    //     "Real-World Projects",
    //     "Industry Mentorship",
    //     "Job Guarantee Program",
    //     "Internship Opportunities",
    //   ],
    //   premium: true,
    // },
    // {
    //   id: "early-bird",
    //   title: "Early Bird Special",
    //   description: "Register 2 weeks before course starts",
    //   courses: ["Any Single Course"],
    //   originalPrice: "Regular Price",
    //   discountPrice: "15% OFF",
    //   savings: "Up to 900 MKD",
    //   discount: "15%",
    //   icon: <Star className="h-8 w-8" />,
    //   color: "from-yellow-500 to-yellow-600",
    //   features: [
    //     "Any Course Available",
    //     "Priority Seating",
    //     "Early Access Materials",
    //     "Bonus Study Resources",
    //     "Free Consultation Session",
    //   ],
    //   timeLimit: "Limited time offer",
    // },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-cyan-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4 mr-2" />
              {t("promo.hero.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-6">
              {t("promo.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t("promo.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Promo Packs */}
      <section className="py-24 bg-gradient-to-b from-white to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("promo.section.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("promo.section.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promoPacks.map((pack, index) => (
              <Card
                key={pack.id}
                className={`relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group flex flex-col h-full ${
                  pack.popular
                    ? "ring-2 ring-teal-500 ring-opacity-50 scale-105"
                    : ""
                } ${
                  pack.premium ? "ring-2 ring-cyan-500 ring-opacity-50" : ""
                } bg-gradient-to-br from-white to-teal-50/20`}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                      🔥 {t("promo.mostPopular")}
                    </Badge>
                  </div>
                )}
                {pack.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                      ⭐ {t("promo.premium")}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {pack.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {pack.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {pack.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow flex flex-col">
                  {/* Content wrapper */}
                  <div className="flex-grow space-y-6">
                    {/* Enhanced Pricing Display */}
                    <div className="text-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">
                      <div className="text-sm text-gray-500 line-through mb-1">
                        {pack.originalPrice}
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                        {pack.discountPrice}
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold rounded-full">
                        {t("promo.save")} {pack.savings} ({pack.discount} {t("promo.off")})
                      </div>
                    </div>

                    {/* Courses Included */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t("promo.coursesIncluded")}
                      </h4>
                      <div className="space-y-1">
                        {pack.courses.map((course, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-gray-700 flex items-center gap-2"
                          >
                            <Check className="h-4 w-4 text-green-500" />
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {t("promo.whatsIncluded")}
                      </h4>
                      <div className="space-y-1">
                        {pack.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-gray-700 flex items-center gap-2"
                          >
                            <Check className="h-4 w-4 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Special Conditions */}
                    {pack.minParticipants && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-blue-700 font-semibold">
                          {t("promo.minimum")} {pack.minParticipants}
                        </div>
                      </div>
                    )}

                    {pack.timeLimit && (
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-sm text-yellow-700 font-semibold">
                          ⏰ {pack.timeLimit}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Enhanced CTA Button - pushed to bottom */}
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-auto">
                    {t("promo.choosePackage")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t("promo.why.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Percent className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{t("promo.why.betterValue.title")}</h3>
              <p className="text-gray-600 text-sm">
                {t("promo.why.betterValue.description")}
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{t("promo.why.learnTogether.title")}</h3>
              <p className="text-gray-600 text-sm">
                {t("promo.why.learnTogether.description")}
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{t("promo.why.premiumSupport.title")}</h3>
              <p className="text-gray-600 text-sm">
                {t("promo.why.premiumSupport.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
