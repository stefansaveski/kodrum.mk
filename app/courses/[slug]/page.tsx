"use client";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Award,
  BookOpen,
  DollarSign,
  Users,
  Star,
  CheckCircle,
  Play,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { t } = useTranslation();

  const courseDetails = [
    //sp
    {
      slug: "structured-programming",
      title: t("courses.programming.structuredProgramming"),
      mentor: "Stefan Saveski",
      mentorBio:
        "Competitive Programmer with extensive experience in algorithm design and programming contests. Specializes in teaching fundamental programming concepts.",
      startDate: "August 21, 2024",
      endDate: "October 30, 2024",
      price: "2,500 MKD",
      level: "Beginner",
      duration: "10 weeks",
      languages: ["C", "Pascal", "Algorithms"],
      targetAudience: [
        "High School Students",
        "University Students",
        "Programming Beginners",
      ],
      description:
        "Learn the fundamentals of programming with structured approach. This course covers basic programming concepts, control structures, functions, and problem-solving techniques.",
      program: [
        {
          day: 1,
          title: "Introduction to Programming",
          topics: [
            "Variables and Data Types",
            "Input/Output Operations",
            "Basic Syntax",
            "First Program",
          ],
        },
        {
          day: 2,
          title: "Control Structures",
          topics: [
            "Conditional Statements",
            "Loops",
            "Nested Structures",
            "Practice Problems",
          ],
        },
        {
          day: 3,
          title: "Functions and Procedures",
          topics: [
            "Function Definition",
            "Parameters and Return Values",
            "Scope",
            "Recursion Basics",
          ],
        },
      ],
      prerequisites: ["Basic computer skills", "Mathematical thinking"],
      whatYouLearn: [
        "Programming fundamentals",
        "Problem-solving skills",
        "Algorithm design",
        "Code debugging",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    // oop
    {
      slug: "object-oriented",
      title: "Object-Oriented Programming",
      mentor: "Petar Hristovski",
      mentorBio:
        "Full Stack Developer at EaseAccess24 with extensive experience in object-oriented design and modern programming paradigms.",
      startDate: "September 15, 2024",
      endDate: "December 8, 2024",
      price: "3,800 MKD",
      level: "Intermediate",
      duration: "12 weeks",
      languages: ["Java", "C++", "UML"],
      targetAudience: [
        "University Students",
        "Software Developers",
        "Programming Enthusiasts",
      ],
      description:
        "Master OOP concepts with Java and C++, including inheritance, polymorphism, and design patterns. Learn to build scalable and maintainable software systems.",
      program: [
        {
          day: 1,
          title: "OOP Fundamentals",
          topics: [
            "Classes and Objects",
            "Encapsulation",
            "Data Hiding",
            "Constructors and Destructors",
          ],
        },
        {
          day: 2,
          title: "Inheritance",
          topics: [
            "Single Inheritance",
            "Multiple Inheritance",
            "Method Overriding",
            "Super Keyword",
          ],
        },
        {
          day: 3,
          title: "Polymorphism",
          topics: [
            "Method Overloading",
            "Runtime Polymorphism",
            "Abstract Classes",
            "Interfaces",
          ],
        },
        {
          day: 4,
          title: "Design Patterns",
          topics: [
            "Singleton Pattern",
            "Factory Pattern",
            "Observer Pattern",
            "MVC Architecture",
          ],
        },
      ],
      prerequisites: [
        "Basic programming knowledge",
        "Structured Programming course",
      ],
      whatYouLearn: [
        "OOP principles",
        "Design patterns",
        "Code organization",
        "Software architecture",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    //calculus
    {
      slug: "calculus",
      title: "Calculus/Math 1",
      mentor: "Borjan Dimeski",
      mentorBio:
        "Mathematician and Programmer with deep expertise in mathematical analysis and its applications in computer science.",
      startDate: "August 18, 2024",
      endDate: "September 29, 2024",
      price: "2,200 MKD",
      level: "University",
      duration: "6 weeks",
      languages: ["Mathematical notation", "Python (for visualization)"],
      targetAudience: [
        "University Students",
        "Engineering Students",
        "Math Enthusiasts",
      ],
      description:
        "Comprehensive calculus course covering limits, derivatives, integrals, and their applications in real-world problems.",
      program: [
        {
          day: 1,
          title: "Limits and Continuity",
          topics: [
            "Limit Definition",
            "Limit Laws",
            "Continuity",
            "Intermediate Value Theorem",
          ],
        },
        {
          day: 2,
          title: "Derivatives",
          topics: [
            "Derivative Definition",
            "Differentiation Rules",
            "Chain Rule",
            "Implicit Differentiation",
          ],
        },
        {
          day: 3,
          title: "Applications of Derivatives",
          topics: [
            "Related Rates",
            "Optimization Problems",
            "Curve Sketching",
            "Mean Value Theorem",
          ],
        },
        {
          day: 4,
          title: "Integration",
          topics: [
            "Antiderivatives",
            "Fundamental Theorem",
            "Substitution Method",
            "Integration by Parts",
          ],
        },
        {
          day: 5,
          title: "Applications of Integration",
          topics: [
            "Area Under Curves",
            "Volume of Solids",
            "Arc Length",
            "Surface Area",
          ],
        },
        {
          day: 6,
          title: "Advanced Topics",
          topics: [
            "Series and Sequences",
            "Taylor Series",
            "Differential Equations",
            "Review",
          ],
        },
      ],
      prerequisites: ["Pre-calculus", "Trigonometry", "Algebra"],
      whatYouLearn: [
        "Calculus fundamentals",
        "Problem-solving techniques",
        "Mathematical modeling",
        "Applications in science",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    //aps
    {
      slug: "algorithms",
      title: "Algorithms and Data Structures",
      mentor: "Boris Gj.",
      mentorBio:
        "Competitive Programmer specializing in advanced algorithms and data structures. Expert in optimization and algorithmic problem solving.",
      startDate: "August 29, 2024",
      endDate: "December 5, 2024",
      price: "3,500 MKD",
      level: "Advanced",
      duration: "14 weeks",
      languages: ["Python", "Java", "Analysis"],
      targetAudience: [
        "Computer Science Students",
        "Software Developers",
        "Programming Enthusiasts",
      ],
      description:
        "Deep dive into algorithms and data structures essential for efficient programming and software development.",
      program: [
        {
          day: 1,
          title: "Introduction and Complexity",
          topics: [
            "Algorithm Analysis",
            "Big O Notation",
            "Basic Data Structures",
            "Arrays and Linked Lists",
          ],
        },
        {
          day: 2,
          title: "Sorting and Searching",
          topics: [
            "Sorting Algorithms",
            "Binary Search",
            "Hash Tables",
            "Performance Comparison",
          ],
        },
        {
          day: 3,
          title: "Advanced Structures",
          topics: [
            "Trees and Graphs",
            "Dynamic Programming",
            "Greedy Algorithms",
            "Exam Preparation",
          ],
        },
      ],
      prerequisites: [
        "Basic programming knowledge",
        "Structured Programming course or equivalent",
      ],
      whatYouLearn: [
        "Algorithm design",
        "Data structure implementation",
        "Complexity analysis",
        "Optimization techniques",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    //ai
    {
      slug: "ai",
      title: "Artificial Intelligence",
      mentor: "Hristijan Saveski",
      mentorBio:
        "Senior Cloud Engineer with expertise in machine learning and AI systems deployment at scale.",
      startDate: "October 1, 2024",
      endDate: "January 21, 2025",
      price: "5,800 MKD",
      level: "Advanced",
      duration: "16 weeks",
      languages: ["Python", "TensorFlow", "Scikit-learn"],
      targetAudience: [
        "Software Developers",
        "Data Scientists",
        "AI Enthusiasts",
      ],
      description:
        "Introduction to artificial intelligence, machine learning, and neural networks with hands-on projects.",
      program: [
        {
          day: 1,
          title: "AI Fundamentals",
          topics: [
            "History of AI",
            "Machine Learning Types",
            "Python for AI",
            "Data Preprocessing",
          ],
        },
        {
          day: 2,
          title: "Supervised Learning",
          topics: [
            "Linear Regression",
            "Classification",
            "Decision Trees",
            "Model Evaluation",
          ],
        },
        {
          day: 3,
          title: "Neural Networks",
          topics: [
            "Perceptrons",
            "Deep Learning",
            "TensorFlow Basics",
            "Image Recognition",
          ],
        },
        {
          day: 4,
          title: "Advanced Topics",
          topics: [
            "Natural Language Processing",
            "Reinforcement Learning",
            "AI Ethics",
            "Project Work",
          ],
        },
      ],
      prerequisites: [
        "Python programming",
        "Basic statistics",
        "Linear algebra",
      ],
      whatYouLearn: [
        "Machine learning algorithms",
        "Neural networks",
        "AI project development",
        "Ethical AI practices",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    //ipks
    {
      slug: "client-side",
      title: "Client-Side Programming",
      mentor: "Petar Hristovski",
      mentorBio:
        "Full Stack Developer at EaseAccess24 specializing in modern web technologies and user interface development.",
      startDate: "September 20, 2024",
      endDate: "December 13, 2024",
      price: "3,200 MKD",
      level: "Intermediate",
      duration: "12 weeks",
      languages: ["JavaScript", "React", "HTML5"],
      targetAudience: ["Web Developers", "Students", "Career Changers"],
      description:
        "Build interactive web applications with modern JavaScript frameworks and responsive design principles.",
      program: [
        {
          day: 1,
          title: "Modern JavaScript",
          topics: [
            "ES6+ Features",
            "DOM Manipulation",
            "Event Handling",
            "Async Programming",
          ],
        },
        {
          day: 2,
          title: "React Fundamentals",
          topics: [
            "Components",
            "Props and State",
            "Event Handling",
            "Lifecycle Methods",
          ],
        },
        {
          day: 3,
          title: "Advanced React",
          topics: [
            "Hooks",
            "Context API",
            "State Management",
            "Performance Optimization",
          ],
        },
        {
          day: 4,
          title: "Project Development",
          topics: [
            "API Integration",
            "Testing",
            "Deployment",
            "Best Practices",
          ],
        },
      ],
      prerequisites: ["HTML/CSS knowledge", "Basic JavaScript"],
      whatYouLearn: [
        "Modern JavaScript",
        "React development",
        "Web APIs",
        "Project deployment",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    //scratch
    {
      slug: "scratch-basics",
      title: "Scratch Basics",
      mentor: "Ana Petrovska",
      mentorBio:
        "Competitive Programmer with extensive experience in algorithm design and programming contests. Specializes in teaching fundamental programming concepts.",
      startDate: "August 21, 2024",
      endDate: "October 30, 2024",
      price: "2,500 MKD",
      level: "Beginner",
      duration: "10 weeks",
      languages: ["C", "Pascal", "Algorithms"],
      targetAudience: [
        "High School Students",
        "University Students",
        "Programming Beginners",
      ],
      description:
        "Learn the fundamentals of programming with structured approach. This course covers basic programming concepts, control structures, functions, and problem-solving techniques.",
      program: [
        {
          day: 1,
          title: "Introduction to Programming",
          topics: [
            "Variables and Data Types",
            "Input/Output Operations",
            "Basic Syntax",
            "First Program",
          ],
        },
        {
          day: 2,
          title: "Control Structures",
          topics: [
            "Conditional Statements",
            "Loops",
            "Nested Structures",
            "Practice Problems",
          ],
        },
        {
          day: 3,
          title: "Functions and Procedures",
          topics: [
            "Function Definition",
            "Parameters and Return Values",
            "Scope",
            "Recursion Basics",
          ],
        },
      ],
      prerequisites: ["Basic computer skills", "Mathematical thinking"],
      whatYouLearn: [
        "Programming fundamentals",
        "Problem-solving skills",
        "Algorithm design",
        "Code debugging",
      ],
      image: "/banners/scratch.webp",
    },
  ];

  const course = courseDetails.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-80 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-400">
            <div className="absolute inset-0 bg-black/50"></div>
            <img
              src={
                course.image ||
                "/placeholder.svg?height=400&width=800&query=programming course hero"
              }
              alt={course.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm font-medium">
                  {course.level} Level
                </Badge>
                <h1 className="text-5xl font-bold mb-4 leading-tight">
                  {course.title}
                </h1>
                <p className="text-xl opacity-90 mb-6">
                  Learn from expert mentor {course.mentor}
                </p>
                <div className="flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>17:00 - 20:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Starts {course.startDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Course Overview
                    </h2>
                  </div>
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-teal-50/30">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {course.description}
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      What You'll Master
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.whatYouLearn.map((item, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-teal-50/20"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {item}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Course Curriculum
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {course.program.map((day, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50/20"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                              {day.day}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-xl text-gray-900 mb-3">
                                {day.title}
                              </h3>
                              <div className="grid md:grid-cols-2 gap-2">
                                {day.topics.map((topic, topicIndex) => (
                                  <div
                                    key={topicIndex}
                                    className="flex items-center gap-2"
                                  >
                                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                    <span className="text-gray-600 text-sm">
                                      {topic}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Prerequisites
                    </h2>
                  </div>
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-teal-50/30">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.prerequisites.map((prereq, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <BookOpen className="h-5 w-5 text-teal-500" />
                            <span className="text-gray-700">{prereq}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>

              <div className="space-y-6">
                {/* Course Details Card */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50 sticky top-6">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                      Course Details
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <DollarSign className="h-5 w-5 text-teal-600" />
                          <span className="font-medium text-gray-700">
                            Price
                          </span>
                        </div>
                        <span className="text-teal-600 font-bold text-lg">
                          {course.price}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-teal-600" />
                          <span className="font-medium text-gray-700">
                            Starts
                          </span>
                        </div>
                        <span className="text-gray-900 font-medium">
                          {course.startDate}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-teal-600" />
                          <span className="font-medium text-gray-700">
                            Ends
                          </span>
                        </div>
                        <span className="text-gray-900 font-medium">
                          {course.endDate}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-teal-600" />
                          <span className="font-medium text-gray-700">
                            Duration
                          </span>
                        </div>
                        <span className="text-gray-900 font-medium">
                          {course.duration}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-teal-600" />
                          <span className="font-medium text-gray-700">
                            Level
                          </span>
                        </div>
                        <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0">
                          {course.level}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-teal-600" />
                          <span className="font-medium text-gray-700">
                            Schedule
                          </span>
                        </div>
                        <span className="text-gray-900 font-medium">
                          17:00 - 20:00
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mentor Card */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                      Your Mentor
                    </h3>
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="font-bold text-xl text-gray-900 mb-2">
                        {course.mentor}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {course.mentorBio}
                      </p>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-teal-200 text-teal-600 hover:bg-teal-50 bg-transparent"
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-teal-200 text-teal-600 hover:bg-teal-50 bg-transparent"
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies Card */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {course.languages.map((lang, index) => (
                        <Badge
                          key={index}
                          className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border-0 hover:from-teal-200 hover:to-cyan-200 transition-all"
                        >
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Target Audience Card */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Perfect For
                    </h3>
                    <ul className="space-y-3">
                      {course.targetAudience.map((audience, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-500" />
                          <span className="text-gray-600">{audience}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6 rounded-xl"
                    size="lg"
                  >
                    <DollarSign className="h-5 w-5 mr-2" />
                    Enroll Now - {course.price}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-teal-200 text-teal-600 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 py-6 rounded-xl bg-transparent"
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contact Mentor
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-teal-200 text-teal-600 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 py-6 rounded-xl bg-transparent"
                    size="lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
