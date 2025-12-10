"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, Code, Database, BookOpen, Cpu, Zap, Github } from "lucide-react";
import Link from "next/link";

type Faculty = "ALL" | "ФИНКИ" | "МФС" | "ФЕИТ";

export function FeaturedCourses() {
  const { t } = useTranslation();
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty>("ALL");

  const activeCourses = [
    // Git & GitHub Workshop
    {
      id: "git-github-fundamentals",
      icon: Github,
      title: t("courses.active-courses-items.items.git-github.title"),
      description: t("courses.active-courses-items.items.git-github.description"),
      instructor: "Христијан Савески",
      startDate: "20 Декември 2025",
      duration: "90 минути",
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.git-github.price"),
      color: "bg-yellow-300 text-yellow-900",
      borderColor: "border-yellow-200",
      link: "https://forms.gle/FQQ935TE3poxeKzE8",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    // ФИНКИ - Христијан
    {
      id: "data-science-intro",
      icon: Database,
      title: t("courses.active-courses-items.items.data-science-intro.title"),
      description: t("courses.active-courses-items.items.data-science-intro.description"),
      instructor: "Христијан Савески",
      startDate: t("courses.active-courses-items.items.data-science-intro.startDate"),
      duration: t("courses.active-courses-items.items.data-science-intro.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.data-science-intro.price"),
      color: "bg-cyan-100 text-cyan-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    {
      id: "databases",
      icon: Database,
      title: t("courses.active-courses-items.items.databases.title"),
      description: t("courses.active-courses-items.items.databases.description"),
      instructor: "Христијан Савески",
      startDate: t("courses.active-courses-items.items.databases.startDate"),
      duration: t("courses.active-courses-items.items.databases.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.databases.price"),
      color: "bg-cyan-100 text-cyan-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    // ФИНКИ - Стефан, Борис
    {
      id: "algorithms-data-structures",
      icon: Code,
      title: t("courses.active-courses-items.items.algorithms-data-structures.title"),
      description: t("courses.active-courses-items.items.algorithms-data-structures.description"),
      instructor: "Стефан Савески, Борис Ѓ.",
      startDate: t("courses.active-courses-items.items.algorithms-data-structures.startDate"),
      duration: t("courses.active-courses-items.items.algorithms-data-structures.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.algorithms-data-structures.price"),
      color: "bg-teal-100 text-teal-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    {
      id: "web-programming",
      icon: Code,
      title: t("courses.active-courses-items.items.web-programming.title"),
      description: t("courses.active-courses-items.items.web-programming.description"),
      instructor: "Стефан Савески, Борис Ѓ.",
      startDate: t("courses.active-courses-items.items.web-programming.startDate"),
      duration: t("courses.active-courses-items.items.web-programming.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.web-programming.price"),
      color: "bg-teal-100 text-teal-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    {
      id: "advanced-programming",
      icon: Code,
      title: t("courses.active-courses-items.items.advanced-programming.title"),
      description: t("courses.active-courses-items.items.advanced-programming.description"),
      instructor: "Стефан Савески, Борис Ѓ.",
      startDate: t("courses.active-courses-items.items.advanced-programming.startDate"),
      duration: t("courses.active-courses-items.items.advanced-programming.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.advanced-programming.price"),
      color: "bg-teal-100 text-teal-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    {
      id: "oop",
      icon: Code,
      title: t("courses.active-courses-items.items.oop.title"),
      description: t("courses.active-courses-items.items.oop.description"),
      instructor: "Стефан Савески, Борис Ѓ.",
      startDate: t("courses.active-courses-items.items.oop.startDate"),
      duration: t("courses.active-courses-items.items.oop.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.oop.price"),
      color: "bg-teal-100 text-teal-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    // ФИНКИ - Петар
    {
      id: "structured-programming",
      icon: Code,
      title: t("courses.active-courses-items.items.structured-programming.title"),
      description: t("courses.active-courses-items.items.structured-programming.description"),
      instructor: "Петар Христовски",
      startDate: t("courses.active-courses-items.items.structured-programming.startDate"),
      duration: t("courses.active-courses-items.items.structured-programming.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.structured-programming.price"),
      color: "bg-teal-100 text-cyan-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    // ФИНКИ - Борјан
    {
      id: "math1-calculus",
      icon: Calculator,
      title: t("courses.active-courses-items.items.math1-calculus.title"),
      description: t("courses.active-courses-items.items.math1-calculus.description"),
      instructor: "Борјан Димески",
      startDate: t("courses.active-courses-items.items.math1-calculus.startDate"),
      duration: t("courses.active-courses-items.items.math1-calculus.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.math1-calculus.price"),
      color: "bg-purple-100 text-purple-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    {
      id: "math2-discrete",
      icon: Calculator,
      title: t("courses.active-courses-items.items.math2-discrete.title"),
      description: t("courses.active-courses-items.items.math2-discrete.description"),
      instructor: "Борјан Димески",
      startDate: t("courses.active-courses-items.items.math2-discrete.startDate"),
      duration: t("courses.active-courses-items.items.math2-discrete.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.math2-discrete.price"),
      color: "bg-purple-100 text-purple-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФИНКИ" as Faculty,
    },
    // ФЕИТ - Јован Петровски
    {
      id: "electrical-fundamentals",
      icon: Zap,
      title: t("courses.active-courses-items.items.electrical-fundamentals.title"),
      description: t("courses.active-courses-items.items.electrical-fundamentals.description"),
      instructor: "Јован Петровски",
      startDate: t("courses.active-courses-items.items.electrical-fundamentals.startDate"),
      duration: t("courses.active-courses-items.items.electrical-fundamentals.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.electrical-fundamentals.price"),
      color: "bg-yellow-100 text-yellow-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФЕИТ" as Faculty,
    },
    {
      id: "feit-math1",
      icon: Calculator,
      title: t("courses.active-courses-items.items.feit-math1.title"),
      description: t("courses.active-courses-items.items.feit-math1.description"),
      instructor: "Јован Петровски",
      startDate: t("courses.active-courses-items.items.feit-math1.startDate"),
      duration: t("courses.active-courses-items.items.feit-math1.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.feit-math1.price"),
      color: "bg-yellow-100 text-yellow-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "ФЕИТ" as Faculty,
    },
    // МФСС - Никола Коцевски
    {
      id: "mechanics",
      icon: Cpu,
      title: t("courses.active-courses-items.items.mechanics.title"),
      description: t("courses.active-courses-items.items.mechanics.description"),
      instructor: "Никола Коцевски",
      startDate: t("courses.active-courses-items.items.mechanics.startDate"),
      duration: t("courses.active-courses-items.items.mechanics.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.mechanics.price"),
      color: "bg-blue-100 text-blue-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "МФС" as Faculty,
    },
    {
      id: "engineering-graphics",
      icon: BookOpen,
      title: t("courses.active-courses-items.items.engineering-graphics.title"),
      description: t("courses.active-courses-items.items.engineering-graphics.description"),
      instructor: "Никола Коцевski",
      startDate: t("courses.active-courses-items.items.engineering-graphics.startDate"),
      duration: t("courses.active-courses-items.items.engineering-graphics.duration"),
      level: t("levels.beginner"),
      price: t("courses.active-courses-items.items.engineering-graphics.price"),
      color: "bg-blue-100 text-blue-700",
      link: "#",
      status: t("courses.status.enrolling"),
      faculty: "МФС" as Faculty,
    },
  ];

  const filteredCourses = selectedFaculty === "ALL"
    ? activeCourses
    : activeCourses.filter(course => course.faculty === selectedFaculty);

  return (
    <section className="py-20 bg-white" id="pripremi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("courses.active-courses")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("courses.active-courses-description")}
          </p>
        </div>

        {/* Faculty Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => setSelectedFaculty("ALL")}
            variant={selectedFaculty === "ALL" ? "default" : "outline"}
            className={selectedFaculty === "ALL"
              ? "bg-teal-600 hover:bg-teal-700 text-white"
              : "border-teal-600 text-teal-600 hover:bg-teal-50"}
          >
            {t("courses.filters.all")}
          </Button>
          <Button
            onClick={() => setSelectedFaculty("ФИНКИ")}
            variant={selectedFaculty === "ФИНКИ" ? "default" : "outline"}
            className={selectedFaculty === "ФИНКИ"
              ? "bg-teal-600 hover:bg-teal-700 text-white"
              : "border-teal-600 text-teal-600 hover:bg-teal-50"}
          >
            ФИНКИ
          </Button>
          <Button
            onClick={() => setSelectedFaculty("МФС")}
            variant={selectedFaculty === "МФС" ? "default" : "outline"}
            className={selectedFaculty === "МФС"
              ? "bg-teal-600 hover:bg-teal-700 text-white"
              : "border-teal-600 text-teal-600 hover:bg-teal-50"}
          >
            МФС
          </Button>
          <Button
            onClick={() => setSelectedFaculty("ФЕИТ")}
            variant={selectedFaculty === "ФЕИТ" ? "default" : "outline"}
            className={selectedFaculty === "ФЕИТ"
              ? "bg-teal-600 hover:bg-teal-700 text-white"
              : "border-teal-600 text-teal-600 hover:bg-teal-50"}
          >
            ФЕИТ
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card
                key={course.id}
                className={`hover:shadow-xl transition-shadow duration-300 border-2 ${
                  course.borderColor || "border-gray-200 hover:border-teal-200"
                } flex flex-col justify-between relative group`}
              >

                <CardHeader>
                  <div className="flex justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center`}
                    >
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <div className="flex items-center">
                      <Badge
                        variant="outline"
                        className="h-6 bg-white border-teal-600 text-teal-600 font-semibold z-10 flex justify-center "
                      >
                        {course.faculty}
                      </Badge>
                    </div>

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
                      <span className="text-gray-500">{t("common.instructor")}</span>
                      <span className="font-semibold text-gray-700">
                        {course.instructor}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{t("common.starts")}</span>
                      <span className="font-semibold text-gray-700">
                        {course.startDate}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{t("common.duration")}</span>
                      <span className="font-semibold text-gray-700">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{t("common.level")}</span>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 ">
                    <Button
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                      asChild
                    >
                      <Link href={course.link} target="_blank">{t("courses.enlist")}</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                      asChild
                    >
                      {/* <Link href={`/courses/${course.id}`}>Learn More</Link> */}
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
            {/* <Link href="/courses">View All Courses</Link> */}
          </Button>
        </div>
      </div>
    </section>
  );
}
