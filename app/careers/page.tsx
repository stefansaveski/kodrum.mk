"use client";

import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Users,
  Heart,
  Award,
  BookOpen,
  Coffee,
  Laptop,
} from "lucide-react";

export default function CareersPage() {
  const { t } = useTranslation();

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Programming Instructor",
      department: "Education",
      type: "Full-time",
      location: "Skopje, Macedonia",
      experience: "5+ years",
      description:
        "Lead programming courses in Java, Python, and web development. Mentor junior instructors and develop curriculum.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years of industry programming experience",
        "2+ years of teaching or training experience",
        "Excellent communication skills in Macedonian and English",
        "Experience with modern development frameworks",
      ],
      benefits: [
        "Competitive salary",
        "Professional development budget",
        "Flexible working hours",
        "Health insurance",
        "Annual bonus",
      ],
    },
    {
      id: 2,
      title: "Mathematics Instructor",
      department: "Education",
      type: "Part-time",
      location: "Skopje, Macedonia",
      experience: "3+ years",
      description:
        "Teach calculus, discrete mathematics, and statistics courses to university students and adults.",
      requirements: [
        "PhD or Master's in Mathematics",
        "University teaching experience preferred",
        "Strong analytical and problem-solving skills",
        "Patience and ability to explain complex concepts",
        "Fluency in Macedonian and English",
      ],
      benefits: [
        "Hourly compensation",
        "Flexible schedule",
        "Professional development opportunities",
        "Collaborative work environment",
      ],
    },
    {
      id: 3,
      title: "Student Success Coordinator",
      department: "Student Services",
      type: "Full-time",
      location: "Skopje, Macedonia",
      experience: "2+ years",
      description:
        "Support student success through academic advising, career guidance, and program coordination.",
      requirements: [
        "Bachelor's degree in Education, Psychology, or related field",
        "Experience in student services or academic advising",
        "Strong interpersonal and communication skills",
        "Organizational and project management abilities",
        "Bilingual (Macedonian/English) preferred",
      ],
      benefits: [
        "Competitive salary",
        "Health and dental insurance",
        "Professional development opportunities",
        "Collaborative team environment",
        "Impact on student success",
      ],
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Skopje, Macedonia",
      experience: "2+ years",
      description:
        "Develop and execute marketing campaigns to promote our educational programs and increase enrollment.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years of digital marketing experience",
        "Experience with social media marketing and content creation",
        "Knowledge of SEO, SEM, and analytics tools",
        "Creative thinking and analytical skills",
      ],
      benefits: [
        "Competitive salary",
        "Creative freedom",
        "Professional development budget",
        "Modern work environment",
        "Performance bonuses",
      ],
    },
  ];

  const volunteerOpportunities = [
    {
      title: "Guest Lecturer",
      description:
        "Share your industry expertise with our students through guest lectures and workshops",
      commitment: "2-4 hours per month",
      requirements: "Industry experience in tech, math, or related fields",
    },
    {
      title: "Mentor",
      description:
        "Guide students in their learning journey and career development",
      commitment: "4-6 hours per month",
      requirements: "Professional experience and passion for helping others",
    },
    {
      title: "Workshop Facilitator",
      description:
        "Lead specialized workshops on emerging technologies or career skills",
      commitment: "1-2 workshops per semester",
      requirements: "Expertise in specific technology or professional skill",
    },
  ];

  const internshipPrograms = [
    {
      title: "Teaching Assistant Internship",
      duration: "3-6 months",
      description:
        "Support instructors in course delivery and student assistance",
      requirements: "Currently enrolled in relevant degree program",
    },
    {
      title: "Curriculum Development Internship",
      duration: "4-6 months",
      description:
        "Assist in developing new course materials and educational content",
      requirements:
        "Background in education, instructional design, or subject matter expertise",
    },
    {
      title: "Student Services Internship",
      duration: "3-4 months",
      description:
        "Support student enrollment, success initiatives, and administrative tasks",
      requirements:
        "Studies in education, psychology, or business administration",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: BookOpen,
      title: "Professional Development",
      description: "Annual budget for conferences, courses, and certifications",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and generous PTO",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate educators in a supportive environment",
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "Performance bonuses and achievement recognition",
    },
    {
      icon: Laptop,
      title: "Modern Equipment",
      description: "Latest technology and tools to support your work",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Help us shape the future of technology education and make a
              lasting impact on students' lives
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team of passionate educators and professionals dedicated to
              transforming lives through education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-700" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore exciting career opportunities with our growing team
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-lg">
                        {job.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className="bg-green-100 text-green-700 w-fit">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="w-fit">
                        {job.department}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.experience}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Requirements:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Benefits:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button className="bg-lime-500 hover:bg-lime-600 text-white">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Share your expertise and give back to the community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">
                        Time Commitment:
                      </span>
                      <p className="text-gray-600">{opportunity.commitment}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Requirements:
                      </span>
                      <p className="text-gray-600">
                        {opportunity.requirements}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-600">
              Gain valuable experience in educational technology and student
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">
                        Duration:
                      </span>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Requirements:
                      </span>
                      <p className="text-gray-600">{program.requirements}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-white">
                    Apply for Internship
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our mission to transform lives through technology education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 text-lg">
              View All Positions
            </Button>
            <Button
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-3 text-lg bg-transparent"
            >
              Contact HR
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>Questions? Email us at careers@techedu.mk</p>
          </div>
        </div>
      </section>
    </div>
  );
}
