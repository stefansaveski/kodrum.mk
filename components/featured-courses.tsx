"use client";

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
import { Calculator, Code, Database } from "lucide-react";
import Link from "next/link";

export function FeaturedCourses() {
  const { t } = useTranslation();

  const activeCourses = [
    {
      id: "algorithms-data-structures",
      icon: Database,
      title: t("courses.programming.algorithms"),
      description:
        "Master essential algorithms and data structures for competitive programming and interviews",
      instructor: "Boris Gj. and Stefan S.",
      startDate: "August 29, 2024",
      duration: "4 days",
      level: "Intermediate",
      price: "2000 MKD",
      color: "bg-cyan-100 text-cyan-700",
      status: "Enrolling Now",
    },
    {
      id: "object-oriented",
      icon: Code,
      title: t("courses.programming.objectOriented"),
      description:
        "Learn object-oriented programming fundamentals with C++ and build a solid foundation for software development",
      instructor: "Stefan Saveski",
      startDate: "August 31, 2024",
      duration: "4 days",
      level: "Beginner",
      price: "2,500 MKD",
      color: "bg-teal-600 text-white",
      status: "Enrolling Now",
    },
    {
      id: "calculus",
      icon: Calculator,
      title: t("courses.math.math2"),
      description:
        "Master fundamental discrete math concepts with practical applications and problem-solving techniques",
      instructor: "Borjan Dimeski",
      startDate: "September 7, 2024",
      duration: "6 days",
      level: "Beginner",
      price: "4000 MKD",
      color: "bg-teal-100 text-teal-700",
      status: "Enrolling Now",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("courses.active-courses")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("courses.active-courses-description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCourses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card
                key={course.id}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-teal-100 text-teal-700 font-semibold"
                    >
                      {course.status}
                    </Badge>
                    <span className="text-lg font-bold text-teal-600">
                      {course.price}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Instructor:</span>
                      <span className="font-semibold text-gray-700">
                        {course.instructor}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Starts:</span>
                      <span className="font-semibold text-gray-700">
                        {course.startDate}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-semibold text-gray-700">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                      asChild
                    >
                      <Link href="/contact">Enroll Now</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                      asChild
                    >
                      <Link href={`/courses/${course.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 bg-transparent"
            asChild
          >
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
