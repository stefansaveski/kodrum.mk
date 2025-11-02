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

  const teamMembers = t("aboutPage.team.members", { returnObjects: true }) as any[];

  const values = [
    {
      icon: BookOpen,
      title: t("aboutPage.coreValues.0.title"),
      description: t("aboutPage.coreValues.0.description"),
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: Users,
      title: t("aboutPage.coreValues.1.title"),
      description: t("aboutPage.coreValues.1.description"),
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      icon: Heart,
      title: t("aboutPage.coreValues.2.title"),
      description: t("aboutPage.coreValues.2.description"),
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: Award,
      title: t("aboutPage.coreValues.3.title"),
      description: t("aboutPage.coreValues.3.description"),
      color: "bg-teal-100 text-teal-700",
    },
  ];

  const achievements = [
    { number: "2000+", label: t("aboutPage.achievements.studentsGraduated") },
    { number: "95%", label: t("aboutPage.achievements.jobPlacement") },
    { number: "50+", label: t("aboutPage.achievements.industryPartners") },
    { number: "15+", label: t("aboutPage.achievements.yearsOfExcellence") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              {t("aboutPage.title")}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">
              {t("aboutPage.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <span className="text-white font-semibold">
                  {t("aboutPage.yearsExcellence")}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <span className="text-white font-semibold">
                  {t("aboutPage.graduates")}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <span className="text-white font-semibold">
                  {t("aboutPage.successRate")}
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
              {t("aboutPage.foundation.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("aboutPage.foundation.subtitle")}
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
                  {t("aboutPage.mission.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative text-white p-8 pt-0">
                <p className="leading-relaxed text-lg opacity-95">
                  {t("aboutPage.mission.description")}
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
                  {t("aboutPage.vision.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative text-white p-8 pt-0">
                <p className="leading-relaxed text-lg opacity-95">
                  {t("aboutPage.vision.description")}
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
                  {t("aboutPage.values.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative text-white p-8 pt-0">
                <p className="leading-relaxed text-lg opacity-95">
                  {t("aboutPage.values.description")}
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
              {t("aboutPage.achievements.title")}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t("aboutPage.achievements.subtitle")}
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
              {t("aboutPage.team.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("aboutPage.team.subtitle")}
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
                      {/* <Button
                        variant="outline"
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 hover:from-teal-600 hover:to-cyan-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        {t("aboutPage.team.coursesButton")}
                      </Button> */}
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
                              {t("aboutPage.team.contactInfo")}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">{t("aboutPage.team.phone")}:</p>
                                <p className="font-medium text-teal-700">
                                  +389 75 295{" "}582
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">{t("aboutPage.team.email")}:</p>
                                <p className="font-medium text-teal-700">
                                  kodrum.mk@gmail.com
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
                                <p className="text-gray-600">{t("aboutPage.team.officeHours")}:</p>
                                <p className="font-medium text-gray-900">
                                  {t("aboutPage.team.officeHoursTime")}
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
                                {t("aboutPage.team.bookConsultation")}
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
                                {t("aboutPage.team.sendMessage")}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {t("aboutPage.team.about")}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {t("aboutPage.team.teachingStyle")}
                          </h4>
                          <p className="text-gray-700">
                            {member.teachingStyle}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            {t("aboutPage.team.achievements")}
                          </h4>
                          <ul className="space-y-1">
                            {member.achievements.map((achievement: string, idx: number) => (
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
                            {t("aboutPage.team.coursesTaught")}
                          </h4>
                          <div
                            className={`space-y-3 ${
                              member.courses.length > 3
                                ? "max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-100"
                                : ""
                            }`}
                          >
                            {member.courses.map((course: { name: string; level: string; duration: string; nextStart: string; price: string }, idx: number) => (
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
                {t("aboutPage.story.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("aboutPage.story.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {t("aboutPage.story.beginning.year")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {t("aboutPage.story.beginning.title")}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t("aboutPage.story.beginning.description")}
                    </p>
                  </CardContent>
                </Card>
{/* 
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {t("aboutPage.story.expansion.year")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {t("aboutPage.story.expansion.title")}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t("aboutPage.story.expansion.description")}
                    </p>
                  </CardContent>
                </Card> */}

                {/* <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {t("aboutPage.story.today.year")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {t("aboutPage.story.today.title")}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t("aboutPage.story.today.description")}
                    </p>
                  </CardContent>
                </Card> */}
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
                <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                      {t("aboutPage.story.successPillars.title")}
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
                            {t("aboutPage.story.successPillars.pillar1.title")}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {t("aboutPage.story.successPillars.pillar1.description")}
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
                            {t("aboutPage.story.successPillars.pillar2.title")}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {t("aboutPage.story.successPillars.pillar2.description")}
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
                            {t("aboutPage.story.successPillars.pillar3.title")}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {t("aboutPage.story.successPillars.pillar3.description")}
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
