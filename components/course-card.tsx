"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowRight } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  price: string;
  technologies: string[];
  ageGroup: string;
  slug?: string;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { t } = useTranslation();

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-teal-100 text-teal-700";
      case "intermediate":
        return "bg-cyan-100 text-cyan-700";
      case "advanced":
        return "bg-teal-200 text-teal-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "kids":
        return "bg-pink-100 text-pink-700";
      case "teens":
        return "bg-blue-100 text-blue-700";
      case "university":
        return "bg-purple-100 text-purple-700";
      case "adults":
        return "bg-orange-100 text-orange-700";
      case "individual":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCourseSlug = (course: Course) => {
    if (course.slug) return course.slug;
    return course.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-teal-200 hover:shadow-teal-100/50">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
          <span className="text-2xl font-bold text-teal-600">
            {course.price}
          </span>{" "}
        </div>
        <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
          {course.title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-3">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-teal-500" /> {course.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-teal-500" /> {course.ageGroup}
          </div>
        </div>

        <div className="space-y-2">
          <Badge
            className={getCategoryColor(course.category)}
            variant="secondary"
          >
            {course.ageGroup}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1">
          {course.technologies?.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-teal-200 text-teal-600"
            >
              {tech}
            </Badge>
          ))}
          {course.technologies && course.technologies.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs border-teal-200 text-teal-600"
            >
              +{course.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-2">
          <Link href="/contact" className="flex-1">
            <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all duration-200 hover:shadow-lg">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href={`/courses/${getCourseSlug(course)}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full bg-transparent border-teal-200 text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
