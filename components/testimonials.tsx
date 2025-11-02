"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";

export function Testimonials() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: t("testimonials.items.0.name"),
      category: t("testimonials.items.0.category"),
      content: t("testimonials.items.0.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
    {
      name: t("testimonials.items.1.name"),
      category: t("testimonials.items.1.category"),
      content: t("testimonials.items.1.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
    {
      name: t("testimonials.items.2.name"),
      category: t("testimonials.items.2.category"),
      content: t("testimonials.items.2.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
    {
      name: t("testimonials.items.3.name"),
      category: t("testimonials.items.3.category"),
      content: t("testimonials.items.3.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
    {
      name: t("testimonials.items.4.name"),
      category: t("testimonials.items.4.category"),
      content: t("testimonials.items.4.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
    {
      name: t("testimonials.items.5.name"),
      category: t("testimonials.items.5.category"),
      content: t("testimonials.items.5.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
    {
      name: t("testimonials.items.6.name"),
      category: t("testimonials.items.6.category"),
      content: t("testimonials.items.6.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
    {
      name: t("testimonials.items.7.name"),
      category: t("testimonials.items.7.category"),
      content: t("testimonials.items.7.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
    {
      name: t("testimonials.items.8.name"),
      category: t("testimonials.items.8.category"),
      content: t("testimonials.items.8.content"),
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      course: t("courses.math.calculus1"),
    },
  ];

  const totalSlides = 3; // 9 testimonials ÷ 3 per slide = 3 slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + totalSlides) % totalSlides
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-teal-300 text-teal-600 hover:bg-teal-50 bg-white shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-teal-500" : "bg-teal-200"
                    }`}
                  />
                )
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-teal-300 text-teal-600 hover:bg-teal-50 bg-white shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[300px]">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${currentSlide}-${index}`}
                className="bg-white border-2 hover:border-teal-200 transition-all duration-300 hover:shadow-lg animate-in slide-in-from-right-5 flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full mr-4 bg-teal-100 flex items-center justify-center border-2 border-teal-200">
                        <User className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.category}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-teal-600 font-medium">
                        {testimonial.course}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
