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
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("contact.getInTouch")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to start your learning journey? Get in touch with us today!
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("contact.address")}
                  </h4>
                  <p className="text-gray-600">
                    123 Tech Street, Skopje, Macedonia
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("contact.phone")}
                  </h4>
                  <p className="text-gray-600">+389 2 123 4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("contact.email")}
                  </h4>
                  <p className="text-gray-600">info@techedu.mk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                We'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
