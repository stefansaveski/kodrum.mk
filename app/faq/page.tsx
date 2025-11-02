"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  HelpCircle,
  BookOpen,
  CreditCard,
  Users,
  Calendar,
  MessageSquare,
} from "lucide-react";

export default function FAQPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqCategories = [
    { id: "all", label: t("faq.categories.all"), icon: HelpCircle },
    { id: "courses", label: t("faq.categories.courses"), icon: BookOpen },
    { id: "enrollment", label: t("faq.categories.enrollment"), icon: Users },
    { id: "payment", label: t("faq.categories.payment"), icon: CreditCard },
    { id: "schedule", label: t("faq.categories.schedule"), icon: Calendar },
  ];

  const faqs = [
    {
      id: 1,
      category: "courses",
      question: "What programming languages do you teach?",
      answer:
        "We teach a wide range of programming languages including Python, Java, C++, JavaScript, HTML/CSS, and Scratch for kids. Our curriculum is regularly updated to include the most in-demand technologies in the industry.",
    },
    {
      id: 2,
      category: "courses",
      question: "Do I need any prior experience to join your courses?",
      answer:
        "No prior experience is required for our beginner courses. We offer courses for all skill levels, from complete beginners to advanced programmers. Our instructors will assess your current level and recommend the most suitable course for you.",
    },
    {
      id: 3,
      category: "enrollment",
      question: "How do I enroll in a course?",
      answer:
        "You can enroll online through our website, visit our campus in person, or call our admissions team. We'll guide you through the enrollment process and help you choose the right course based on your goals and schedule.",
    },
    {
      id: 4,
      category: "enrollment",
      question: "What is the minimum age requirement?",
      answer:
        "We accept students from age 7 and up. Our kids' courses are designed for ages 7-12, teen courses for high school students, and we have specialized programs for university students and adults. There's no maximum age limit!",
    },
    {
      id: 5,
      category: "payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, bank transfers, credit/debit cards, and offer installment plans. We also provide special discounts for early registration, students, groups, and alumni. Corporate billing is available for company-sponsored training.",
    },
    {
      id: 6,
      category: "payment",
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a full refund if you withdraw within the first week of the course. After that, refunds are prorated based on the remaining course duration. Please refer to our terms and conditions for complete refund policy details.",
    },
    {
      id: 7,
      category: "schedule",
      question: "What are your class schedules?",
      answer:
        "We offer flexible scheduling with evening classes (6-9 PM), weekend sessions, and intensive programs. Most regular courses run 2-3 times per week for 10-16 weeks. We also offer seasonal intensive programs and individual tutoring with flexible timing.",
    },
    {
      id: 8,
      category: "schedule",
      question: "Can I change my schedule after enrollment?",
      answer:
        "Yes, you can request a schedule change subject to availability in other time slots. We try our best to accommodate schedule changes, especially for work or academic conflicts. Contact our student services team for assistance.",
    },
    {
      id: 9,
      category: "courses",
      question: "Do you provide certificates upon completion?",
      answer:
        "Yes, all students receive a certificate of completion for successfully finishing their courses. Our certificates are recognized by many employers in the region, and we also offer preparation for industry-standard certifications.",
    },
    {
      id: 10,
      category: "courses",
      question: "What is the student-to-instructor ratio?",
      answer:
        "We maintain small class sizes with a maximum of 15-20 students per instructor for regular courses and 8-10 for kids' courses. This ensures personalized attention and effective learning. Individual tutoring is also available.",
    },
    {
      id: 11,
      category: "enrollment",
      question: "Do you offer job placement assistance?",
      answer:
        "Yes, we provide career guidance, resume review, interview preparation, and job placement assistance for our graduates. We have partnerships with local tech companies and maintain a job board exclusively for our alumni.",
    },
    {
      id: 12,
      category: "courses",
      question: "Are course materials included in the fee?",
      answer:
        "Yes, all necessary course materials, textbooks, and software licenses are included in the course fee. You'll also get access to our online learning platform with additional resources, practice exercises, and project templates.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-cyan-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4 mr-2" />
              Get Your Questions Answered
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-6">
              FAQ
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Find quick answers to the most common questions about our courses
              and services
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder={t("faq.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {faqCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <IconComponent className="h-4 w-4" />
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    value={`item-${faq.id}`}
                    className="border border-teal-100 rounded-xl px-6 bg-gradient-to-r from-white to-teal-50/30 hover:shadow-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="font-semibold text-gray-900 text-lg">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-6 ml-12 text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : (
            <div className="text-center py-16 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl">
              <HelpCircle className="h-20 w-20 text-teal-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No questions found
              </h3>
              <p className="text-gray-500 text-lg">
                Try different keywords or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-2xl border border-teal-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Can't find what you're looking for? Our friendly support team is
                here to help you succeed!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-teal-500 text-teal-700 hover:bg-teal-50 px-10 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent"
                >
                  Schedule a Call
                </Button>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">
                <div className="text-teal-700 font-medium">
                  <p className="mb-2">
                    📧 kodrum.mk@gmail.com | 📞 +389 75 295{" "}582
                  </p>
                  <p>⚡ Response time: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
