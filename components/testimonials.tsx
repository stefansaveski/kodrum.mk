"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Ana Petrovic",
      age: "16",
      category: "High School Student",
      content:
        "The programming courses helped me discover my passion for coding. The instructors are amazing!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      course: "Structured Programming",
    },
    {
      name: "Marko Stojanovski",
      age: "28",
      category: "Career Changer",
      content:
        "Switched from marketing to web development thanks to their comprehensive courses. Now I work at a tech company!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      course: "Full Stack Development",
    },
    {
      name: "Elena Dimitrova",
      age: "22",
      category: "University Student",
      content:
        "The calculus course helped me excel in my engineering studies. Clear explanations and great support.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      course: "Calculus/Math 1",
    },
    {
      name: "Stefan Nikolovski",
      age: "19",
      category: "Computer Science Student",
      content:
        "The algorithms course was challenging but incredibly rewarding. I feel much more confident in my programming skills now.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      course: "Algorithms and Data Structures",
    },
    {
      name: "Milica Trajkovska",
      age: "35",
      category: "Working Professional",
      content:
        "As a working mom, the flexible schedule and excellent online materials made it possible for me to learn programming.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      course: "Web Development",
    },
    {
      name: "Aleksandar Mitrev",
      age: "24",
      category: "Recent Graduate",
      content:
        "The cloud computing course gave me the skills I needed to land my dream job at a tech startup.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      course: "Cloud Computing",
    },
    {
      name: "Ana Petrovic",
      age: "16",
      category: "High School Student",
      content:
        "The programming courses helped me discover my passion for coding. The instructors are amazing!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      course: "Structured Programming",
    },
    {
      name: "Marko Stojanovski",
      age: "28",
      category: "Career Changer",
      content:
        "Switched from marketing to web development thanks to their comprehensive courses. Now I work at a tech company!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      course: "Full Stack Development",
    },
    {
      name: "Elena Dimitrova",
      age: "22",
      category: "University Student",
      content:
        "The calculus course helped me excel in my engineering studies. Clear explanations and great support.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      course: "Calculus/Math 1",
    },
    {
      name: "Stefan Nikolovski",
      age: "19",
      category: "Computer Science Student",
      content:
        "The algorithms course was challenging but incredibly rewarding. I feel much more confident in my programming skills now.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      course: "Algorithms and Data Structures",
    },
    {
      name: "Milica Trajkovska",
      age: "35",
      category: "Working Professional",
      content:
        "As a working mom, the flexible schedule and excellent online materials made it possible for me to learn programming.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      course: "Web Development",
    },
    {
      name: "Aleksandar Mitrev",
      age: "24",
      category: "Recent Graduate",
      content:
        "The cloud computing course gave me the skills I needed to land my dream job at a tech startup.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      course: "Cloud Computing",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
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
            Hear from Our Learners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Success stories from students of all ages and backgrounds
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
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
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
                className="bg-white border-2 hover:border-teal-200 transition-all duration-300 hover:shadow-lg animate-in slide-in-from-right-5"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-teal-100"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.category}, Age {testimonial.age}
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
