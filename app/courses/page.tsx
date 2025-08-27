"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, SortAsc } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCoursesData } from "./courses";

export default function CoursesPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("name-asc");
  const [activeCategory, setActiveCategory] = useState("all");

  const courseCategories = [
    { id: "all", label: "All Courses", shortLabel: "All" },
    { id: "kids", label: t("courses.categories.kids"), shortLabel: "Kids" },
    { id: "teens", label: t("courses.categories.teens"), shortLabel: "Teens" },
    {
      id: "university",
      label: t("courses.categories.university"),
      shortLabel: "University",
    },
    {
      id: "adults",
      label: t("courses.categories.adults"),
      shortLabel: "Adults",
    },
    {
      id: "individual",
      label: t("courses.categories.individual"),
      shortLabel: "Individual",
    },
  ];

  // Import and get courses data
  const coursesData = getCoursesData();
  const {
    programming: programmingCourses,
    math: mathCourses,
    other: otherCourses,
    kids: kidsCourses,
    individual: individualCourses,
  } = coursesData;

  const allCourses = [
    ...programmingCourses,
    ...mathCourses,
    ...otherCourses,
    ...kidsCourses,
    ...individualCourses,
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel =
      selectedLevel === "all" ||
      course.level.toLowerCase() === selectedLevel.toLowerCase();
    return matchesSearch && matchesLevel;
  });

  const sortCourses = (courses: any[]) => {
    const sorted = [...courses];
    switch (sortBy) {
      case "name-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "price-asc":
        return sorted.sort((a, b) => {
          const priceA = Number.parseInt(a.price.replace(/[^\d]/g, ""));
          const priceB = Number.parseInt(b.price.replace(/[^\d]/g, ""));
          return priceA - priceB;
        });
      case "price-desc":
        return sorted.sort((a, b) => {
          const priceA = Number.parseInt(a.price.replace(/[^\d]/g, ""));
          const priceB = Number.parseInt(b.price.replace(/[^\d]/g, ""));
          return priceB - priceA;
        });
      case "duration-asc":
        return sorted.sort((a, b) => {
          const durationA =
            Number.parseInt(a.duration.replace(/[^\d]/g, "")) || 0;
          const durationB =
            Number.parseInt(b.duration.replace(/[^\d]/g, "")) || 0;
          return durationA - durationB;
        });
      case "duration-desc":
        return sorted.sort((a, b) => {
          const durationA =
            Number.parseInt(a.duration.replace(/[^\d]/g, "")) || 0;
          const durationB =
            Number.parseInt(b.duration.replace(/[^\d]/g, "")) || 0;
          return durationB - durationA;
        });
      case "level":
        const levelOrder: Record<string, number> = {
          Beginner: 1,
          Intermediate: 2,
          Advanced: 3,
          "All Levels": 4,
        };
        return sorted.sort(
          (a, b) => (levelOrder[a.level] || 5) - (levelOrder[b.level] || 5)
        );
      default:
        return sorted;
    }
  };

  const getCoursesByCategory = (category: string) => {
    const courses =
      category === "all"
        ? filteredCourses
        : filteredCourses.filter((course) => course.category === category);
    return sortCourses(courses);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              {t("courses.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("courses.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section className="py-6 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg focus:ring-teal-500 focus:border-teal-500 border-2"
            />
          </div>

          {/* Mobile-First Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Category Dropdown for Mobile */}
            <div className="sm:hidden">
              <Select value={activeCategory} onValueChange={setActiveCategory}>
                <SelectTrigger className="w-full h-12 border-2 border-teal-200 focus:border-teal-500">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {courseCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Level Filter */}
            <div className="flex-1">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full h-12 border-2 border-teal-200 focus:border-teal-500">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort Options */}
            <div className="flex-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full h-12 border-2 border-teal-200 focus:border-teal-500">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">
                    Price (High to Low)
                  </SelectItem>
                  <SelectItem value="duration-asc">
                    Duration (Short to Long)
                  </SelectItem>
                  <SelectItem value="duration-desc">
                    Duration (Long to Short)
                  </SelectItem>
                  <SelectItem value="level">Level (Beginner First)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Desktop Category Tabs */}
          <div className="hidden sm:block mt-6">
            <div className="flex flex-wrap gap-2">
              {courseCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg"
                      : "border-2 border-teal-200 text-teal-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 hover:border-teal-300"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || selectedLevel !== "all" || sortBy !== "name-asc") && (
            <div className="mt-4 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-teal-700">
                  Active filters:
                </span>
                {searchTerm && (
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedLevel !== "all" && (
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">
                    Level: {selectedLevel}
                  </span>
                )}
                {sortBy !== "name-asc" && (
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">
                    Sort:{" "}
                    {sortBy
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </span>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedLevel("all");
                    setSortBy("name-asc");
                  }}
                  className="text-teal-600 hover:text-teal-700 text-xs"
                >
                  Clear all
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {courseCategories.find((cat) => cat.id === activeCategory)
                ?.label || "All Courses"}
            </h2>
            <p className="text-gray-600">
              Showing {getCoursesByCategory(activeCategory).length} courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCoursesByCategory(activeCategory).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {getCoursesByCategory(activeCategory).length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or browse different
                  categories.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedLevel("all");
                    setActiveCategory("all");
                  }}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                >
                  View All Courses
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
