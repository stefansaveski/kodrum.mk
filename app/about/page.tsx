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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Phone,
  MessageSquare,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation();
  const [selectedMentor, setSelectedMentor] = useState(null);

  const teamMembers = [
    // Hristijan
    {
      name: "Hristijan Saveski",
      role: "Senior Cloud Engineer",
      specialization: "Cloud Computing & DevOps",
      experience: "5+ years",
      education: "Computer Engineering Graduate",
      image: "/mentors/hristijan.jpg",
      bio: "Senior Cloud Engineer with extensive experience in cloud architecture and DevOps practices. Specializes in teaching modern infrastructure and deployment strategies.",
      courses: [
        {
          name: "Cloud Computing Basics",
          level: "Intermediate",
          duration: "6 weeks",
          nextStart: "Sep 12, 2024",
          price: "3,800 MKD",
        },
        {
          name: "DevOps & CI/CD",
          level: "Advanced",
          duration: "8 weeks",
          nextStart: "Oct 2, 2024",
          price: "4,500 MKD",
        },
        {
          name: "AWS Certification Prep",
          level: "Advanced",
          duration: "10 weeks",
          nextStart: "Oct 20, 2024",
          price: "5,500 MKD",
        },
        {
          name: "Docker & Kubernetes",
          level: "Advanced",
          duration: "7 weeks",
          nextStart: "Nov 8, 2024",
          price: "4,200 MKD",
        },
        {
          name: "Infrastructure as Code",
          level: "Advanced",
          duration: "6 weeks",
          nextStart: "Nov 25, 2024",
          price: "3,900 MKD",
        },
        {
          name: "Cloud Security",
          level: "Expert",
          duration: "8 weeks",
          nextStart: "Dec 10, 2024",
          price: "5,000 MKD",
        },
      ],
      achievements: [
        "AWS Certified Solutions Architect",
        "Kubernetes expert",
        "Cloud migration specialist",
      ],
      teachingStyle: "Hands-on labs with real cloud environments",
    },
    // Stefan
    {
      name: "Stefan Saveski",
      role: "Competitive Programmer & Instructor",
      specialization: "Programming & Algorithms",
      experience: "6+ years",
      education: "Computer Science Student",
      image: "/mentors/stefan.jpg",
      bio: "Passionate competitive programmer with multiple awards in national and international programming contests. Specializes in teaching structured programming and algorithmic thinking.",
      courses: [
        {
          name: "Structured Programming",
          level: "Beginner",
          duration: "4 weeks",
          nextStart: "Aug 21, 2024",
          price: "2,500 MKD",
        },
        {
          name: "Competitive Programming",
          level: "Advanced",
          duration: "8 weeks",
          nextStart: "Sep 15, 2024",
          price: "4,500 MKD",
        },
        {
          name: "C++ Fundamentals",
          level: "Intermediate",
          duration: "6 weeks",
          nextStart: "Oct 1, 2024",
          price: "3,200 MKD",
        },
        {
          name: "Problem Solving Techniques",
          level: "Intermediate",
          duration: "5 weeks",
          nextStart: "Oct 20, 2024",
          price: "2,800 MKD",
        },
        {
          name: "Advanced C++ Programming",
          level: "Advanced",
          duration: "7 weeks",
          nextStart: "Nov 5, 2024",
          price: "4,000 MKD",
        },
        {
          name: "Programming Contest Preparation",
          level: "Advanced",
          duration: "10 weeks",
          nextStart: "Nov 15, 2024",
          price: "5,500 MKD",
        },
      ],
      achievements: [
        "3x National Programming Champion",
        "IOI Bronze Medal",
        "ACM ICPC Regional Finalist",
      ],
      teachingStyle: "Hands-on problem solving with real contest problems",
    },
    // Petar
    {
      name: "Petar Hristovski",
      role: "Full Stack Developer",
      specialization: "Web Development",
      experience: "5+ years",
      education: "Software Engineering Graduate",
      image: "/mentors/petar.jpg",
      bio: "Full Stack Developer at EaseAccess24 with extensive experience in modern web technologies. Passionate about teaching practical web development skills.",
      courses: [
        {
          name: "Web Development Fundamentals",
          level: "Beginner",
          duration: "8 weeks",
          nextStart: "Sep 5, 2024",
          price: "3,500 MKD",
        },
        {
          name: "React & Node.js",
          level: "Intermediate",
          duration: "10 weeks",
          nextStart: "Sep 25, 2024",
          price: "4,800 MKD",
        },
        {
          name: "Full Stack Project",
          level: "Advanced",
          duration: "12 weeks",
          nextStart: "Oct 15, 2024",
          price: "6,000 MKD",
        },
        {
          name: "JavaScript Advanced Concepts",
          level: "Intermediate",
          duration: "6 weeks",
          nextStart: "Nov 5, 2024",
          price: "3,200 MKD",
        },
        {
          name: "Database Design & Management",
          level: "Intermediate",
          duration: "5 weeks",
          nextStart: "Nov 20, 2024",
          price: "2,800 MKD",
        },
        {
          name: "API Development & Integration",
          level: "Advanced",
          duration: "7 weeks",
          nextStart: "Dec 1, 2024",
          price: "4,200 MKD",
        },
        {
          name: "Mobile App Development",
          level: "Advanced",
          duration: "9 weeks",
          nextStart: "Dec 15, 2024",
          price: "5,200 MKD",
        },
      ],
      achievements: [
        "Senior developer at EaseAccess24",
        "Open source contributor",
        "Tech conference speaker",
      ],
      teachingStyle: "Project-based learning with industry best practices",
    },
    // Boris
    {
      name: "Boris Gjorgjievski",
      role: "Competitive Programmer & Algorithm Expert",
      specialization: "Algorithms & Data Structures",
      experience: "6+ years",
      education: "Computer Science Graduate",
      image: "/mentors/boris.jpg",
      bio: "Expert in algorithms and data structures with extensive competitive programming background. Known for making complex algorithmic concepts accessible to students.",
      courses: [
        {
          name: "Algorithms and Data Structures",
          level: "Intermediate",
          duration: "4 weeks",
          nextStart: "Aug 29, 2024",
          price: "3,500 MKD",
        },
        {
          name: "Advanced Algorithms",
          level: "Advanced",
          duration: "6 weeks",
          nextStart: "Sep 20, 2024",
          price: "4,200 MKD",
        },
        {
          name: "Graph Theory",
          level: "Advanced",
          duration: "5 weeks",
          nextStart: "Oct 10, 2024",
          price: "3,800 MKD",
        },
        {
          name: "Dynamic Programming",
          level: "Advanced",
          duration: "4 weeks",
          nextStart: "Nov 1, 2024",
          price: "3,600 MKD",
        },
        {
          name: "Algorithm Optimization",
          level: "Expert",
          duration: "6 weeks",
          nextStart: "Nov 20, 2024",
          price: "4,800 MKD",
        },
        {
          name: "Competitive Programming Strategies",
          level: "Advanced",
          duration: "8 weeks",
          nextStart: "Dec 5, 2024",
          price: "5,200 MKD",
        },
        {
          name: "Machine Learning Algorithms",
          level: "Advanced",
          duration: "7 weeks",
          nextStart: "Dec 15, 2024",
          price: "4,500 MKD",
        },
      ],
      achievements: [
        "Multiple ACM ICPC medals",
        "Algorithm optimization specialist",
        "Published research in algorithmic complexity",
      ],
      teachingStyle: "Visual explanations with step-by-step problem breakdowns",
    },
    // Borjan
    {
      name: "Borjan Dimeski",
      role: "Mathematician & Programmer",
      specialization: "Mathematics & Programming",
      experience: "4+ years",
      education: "MSc Mathematics",
      image: "/mentors/borjan.jpg",
      bio: "Experienced mathematician with a passion for teaching calculus and discrete mathematics. Combines theoretical knowledge with practical programming applications.",
      courses: [
        {
          name: "Calculus/Math 1",
          level: "Beginner",
          duration: "6 weeks",
          nextStart: "Aug 18, 2024",
          price: "2,200 MKD",
        },
        {
          name: "Discrete Mathematics",
          level: "Intermediate",
          duration: "8 weeks",
          nextStart: "Sep 10, 2024",
          price: "3,000 MKD",
        },
        {
          name: "Mathematical Analysis",
          level: "Advanced",
          duration: "10 weeks",
          nextStart: "Oct 5, 2024",
          price: "4,000 MKD",
        },
        {
          name: "Linear Algebra",
          level: "Intermediate",
          duration: "6 weeks",
          nextStart: "Oct 25, 2024",
          price: "2,800 MKD",
        },
        {
          name: "Statistics & Probability",
          level: "Intermediate",
          duration: "7 weeks",
          nextStart: "Nov 10, 2024",
          price: "3,200 MKD",
        },
        {
          name: "Mathematical Modeling",
          level: "Advanced",
          duration: "8 weeks",
          nextStart: "Nov 25, 2024",
          price: "3,800 MKD",
        },
      ],
      achievements: [
        "Published mathematician",
        "University lecturer",
        "Math Olympiad coach",
      ],
      teachingStyle:
        "Connecting mathematical theory with real-world programming applications",
    },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Excellence in Education",
      description:
        "We maintain the highest standards in curriculum design and instruction delivery.",
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: Users,
      title: "Inclusive Learning",
      description:
        "Education for everyone, regardless of age, background, or previous experience.",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      icon: Heart,
      title: "Passion for Teaching",
      description:
        "Our instructors are passionate about sharing knowledge and inspiring students.",
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: Award,
      title: "Industry Relevance",
      description:
        "Courses designed to meet current industry demands and future technology trends.",
      color: "bg-teal-100 text-teal-700",
    },
  ];

  const achievements = [
    { number: "2000+", label: "Students Graduated" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "15+", label: "Years of Excellence" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              About Kodrum
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">
              Empowering learners of all ages with cutting-edge technology
              education since 2023
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <span className="text-white font-semibold">
                  15+ Years of Excellence
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <span className="text-white font-semibold">
                  2000+ Graduates
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <span className="text-white font-semibold">
                  95% Success Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-teal-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our educational mission and drive our
              success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
              <CardHeader className="relative text-center text-white p-8">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold mb-4">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="relative text-white p-8 pt-0">
                <p className="leading-relaxed text-lg opacity-95">
                  To provide accessible, high-quality technology education that
                  empowers individuals to thrive in the digital age, regardless
                  of their age or background.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
              <CardHeader className="relative text-center text-white p-8">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold mb-4">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="relative text-white p-8 pt-0">
                <p className="leading-relaxed text-lg opacity-95">
                  To be the leading educational institution in the Balkans,
                  recognized for innovation in technology education and student
                  success.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
              <CardHeader className="relative text-center text-white p-8">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold mb-4">
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent className="relative text-white p-8 pt-0">
                <p className="leading-relaxed text-lg opacity-95">
                  Excellence, inclusivity, innovation, and integrity guide
                  everything we do in our educational mission.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const gradients = [
                "bg-gradient-to-br from-teal-400 to-teal-500",
                "bg-gradient-to-br from-cyan-400 to-cyan-500",
                "bg-gradient-to-br from-teal-500 to-cyan-500",
                "bg-gradient-to-br from-teal-400 to-cyan-400",
              ];
              return (
                <Card
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 rounded-xl ${gradients[index]} flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and student
              success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 border border-white/20">
                  <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-white/90 font-medium text-lg">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate educators and industry experts are dedicated to
              your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-sm opacity-30 scale-110"></div>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-teal-700 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Badge
                      variant="secondary"
                      className="mr-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border-0"
                    >
                      {member.specialization}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-teal-200 text-teal-600"
                    >
                      {member.experience}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    {member.education}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 hover:from-teal-600 hover:to-cyan-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Courses This Mentor Teaches
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-20 h-20 rounded-full object-cover border-3 border-teal-200"
                          />
                          <div>
                            <DialogTitle className="text-2xl font-bold text-gray-900">
                              {member.name}
                            </DialogTitle>
                            <DialogDescription className="text-teal-700 font-semibold text-lg">
                              {member.role}
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-6">
                        {/* Contact Information */}
                        <Card className="bg-teal-50 border-teal-200">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-teal-600" />
                              Contact Information
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Phone:</p>
                                <p className="font-medium text-teal-700">
                                  +389 70{" "}
                                  {Math.floor(Math.random() * 900000) + 100000}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Email:</p>
                                <p className="font-medium text-teal-700">
                                  {member.name.toLowerCase().replace(" ", ".")}
                                  @kodrum.mk
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">LinkedIn:</p>
                                <p className="font-medium text-teal-700">
                                  linkedin.com/in/
                                  {member.name.toLowerCase().replace(" ", "")}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Office Hours:</p>
                                <p className="font-medium text-gray-900">
                                  Mon-Fri 2:00-6:00 PM
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                              <Button
                                size="sm"
                                className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg"
                                onClick={() =>
                                  (window.location.href = "/contact")
                                }
                              >
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Book Consultation
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg bg-transparent"
                                onClick={() =>
                                  (window.location.href = "/contact")
                                }
                              >
                                <Mail className="h-4 w-4 mr-1" />
                                Send Message
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            About
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Teaching Style
                          </h4>
                          <p className="text-gray-700">
                            {member.teachingStyle}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Achievements
                          </h4>
                          <ul className="space-y-1">
                            {member.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-gray-700 flex items-center gap-2"
                              >
                                <Award className="h-4 w-4 text-teal-600" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Courses Taught
                          </h4>
                          <div
                            className={`space-y-3 ${
                              member.courses.length > 3
                                ? "max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-100"
                                : ""
                            }`}
                          >
                            {member.courses.map((course, idx) => (
                              <Card
                                key={idx}
                                className="border border-teal-200 hover:border-teal-300 transition-colors hover:shadow-md"
                              >
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-semibold text-gray-900">
                                      {course.name}
                                    </h5>
                                    <Badge
                                      variant="secondary"
                                      className="bg-teal-100 text-teal-700"
                                    >
                                      {course.level}
                                    </Badge>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      {course.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4" />
                                      {course.nextStart}
                                    </div>
                                  </div>
                                  <div className="text-lg font-bold text-teal-700">
                                    {course.price}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we became Macedonia's leading tech education center
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          2009
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        The Beginning
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Founded as a small programming school with weekend classes
                      for university students, driven by a vision to make
                      technology education accessible to everyone in Macedonia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          2015
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Expansion
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Expanded curriculum to include mathematics, cybersecurity,
                      and AI. Introduced specialized programs for children as
                      young as 7 years old, making us a comprehensive
                      educational institution.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          2024
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Today
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Recognized as one of the leading technology education
                      institutions in the Balkans, serving 2,000+ students
                      annually with graduates working at top companies
                      worldwide.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
                <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                      Our Success Pillars
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">
                            1
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Exceptional Instructors
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Real industry experience and passion for teaching
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">
                            2
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Cutting-edge Curriculum
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Evolves with technology trends and industry needs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">
                            3
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Supportive Environment
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Encourages growth, innovation, and collaboration
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
