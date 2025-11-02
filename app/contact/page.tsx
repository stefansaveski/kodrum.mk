"use client";

import type React from "react";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  BookOpen,
  HeadphonesIcon,
} from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    courseInterest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: t("contact.phone"),
      primary: "+389 75 295 582",
      secondary: "+389 75 295 582",
      description: "Call us during business hours",
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      primary: "kodrum.mk@gmail.com",
      secondary: "kodrum.mk@gmail.com",
      description: "We respond within 24 hours",
      color: "bg-teal-100 text-teal-700",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      primary: "Available on website",
      secondary: "Mon-Fri 9AM-6PM",
      description: "Instant support for quick questions",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      icon: Calendar,
      title: "Schedule Visit",
      primary: "Book a tour",
      secondary: "See our facilities",
      description: "Visit our modern learning spaces",
      color: "bg-teal-100 text-teal-700",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const departments = [
    {
      name: "Admissions",
      email: "kodrum.mk@gmail.com",
      phone: "+389 75 295 582",
      description: "Course enrollment and program information",
    },
    {
      name: "Student Support",
      email: "kodrum.mk@gmail.com",
      phone: "+389 75 295 582",
      description: "Academic support and student services",
    },
    {
      name: "Corporate Training",
      email: "kodrum.mk@gmail.com",
      phone: "+389 75 295 582",
      description: "Custom training solutions for businesses",
    },
    {
      name: "Technical Support",
      email: "kodrum.mk@gmail.com",
      phone: "+389 75 295 582",
      description: "Platform and technical assistance",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your learning journey? We're here to help you every
              step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose the way that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-teal-200"
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-xl ${method.color
                        .replace("green", "teal")
                        .replace("blue", "teal")
                        .replace("purple", "cyan")
                        .replace(
                          "orange",
                          "teal"
                        )} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-1">
                      {method.title === t("contact.phone") 
                        ? method.primary.slice(0, -3) + " " + method.primary.slice(-3)
                        : method.primary}
                    </p>
                    <p className="text-sm text-gray-600">
                      {method.title === t("contact.phone") && method.secondary
                        ? method.secondary.slice(0, -3) + " " + method.secondary.slice(-3)
                        : method.secondary}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="h-fit shadow-xl border-2 hover:border-teal-200 transition-colors">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-teal-100">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-teal-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-teal-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-teal-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                      />
                    </div>
                    <div>
                      <select
                        name="courseInterest"
                        value={formData.courseInterest}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-teal-200 rounded-lg bg-background text-foreground focus:border-teal-500 focus:ring-teal-500"
                      >
                        <option value="">Course Interest</option>
                        <option value="programming">Programming</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="it-courses">IT Courses</option>
                        <option value="kids">Kids Courses</option>
                        <option value="individual">Individual Tutoring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white text-lg py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address & Hours */}
              <Card className="shadow-xl border-2 hover:border-teal-200 transition-colors">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <MapPin className="mr-2 h-5 w-5" />
                    Visit Our Campus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("contact.address")}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      123 Tech Street
                      <br />
                      Skopje 1000, Macedonia
                      <br />
                      Near City Mall
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-teal-600" />
                      {t("contact.hours")}
                    </h4>
                    <div className="space-y-2">
                      {officeHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm p-2 bg-teal-50 rounded-lg"
                        >
                          <span className="text-gray-600 font-medium">
                            {schedule.day}
                          </span>
                          <span className="font-semibold text-teal-700">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Departments */}
              <Card className="shadow-xl border-2 hover:border-teal-200 transition-colors">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <HeadphonesIcon className="mr-2 h-5 w-5" />
                    Department Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className="p-4 bg-teal-50 rounded-lg border border-teal-100 hover:border-teal-200 transition-colors"
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {dept.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {dept.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                          <span className="text-teal-700 font-medium">
                            {dept.email}
                          </span>
                          <span className="text-gray-600">
                            {dept.phone.slice(0, -3)}{" "}{dept.phone.slice(-3)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Visit
                </Button>
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 py-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">
              Located in the heart of Skopje, easily accessible by public
              transport
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-xl border-2 border-teal-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.039817525427!2d21.48310597746748!3d41.977954871231056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13543feb617957f3%3A0xccd7c7d64f1e596f!2sKodrum!5e0!3m2!1smk!2smk!4v1755173619685!5m2!1smk!2smk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <Badge className="bg-teal-100 text-teal-700 mb-2">
                Learning Environment
              </Badge>
              <p className="text-sm text-gray-600">
                Modern classrooms with high-speed internet and latest technology
              </p>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <Badge className="bg-teal-100 text-teal-700 mb-2">
                Public Transport
              </Badge>
              <p className="text-sm text-gray-600">
                Best: Bus 17, 27 | Also: 3, 3a, 3b, 5, 7, 15, 15a, 23, 35 -
                Stop: Posledna 5ka
              </p>
            </div>

            <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
              <Badge className="bg-cyan-100 text-cyan-700 mb-2">Parking</Badge>
              <p className="text-sm text-gray-600">
                Free parking in Kodrum's yard (4 spaces) and free street parking
                near the center
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
