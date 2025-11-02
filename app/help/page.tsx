"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HelpPage() {
  const { t } = useTranslation();
  const faqItems = t("help.faqItems", { returnObjects: true }) as any[];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("help.title")}
          </h1>
          <p className="text-xl text-gray-600">
            {t("help.subtitle")}
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow border-teal-100">
              <CardHeader>
                <Phone className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                <CardTitle className="text-lg">{t("help.callUs")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+389 75 295{" "}582</p>
                <p className="text-sm text-gray-500 mt-1">{t("help.hours")}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-teal-100">
              <CardHeader>
                <Mail className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                <CardTitle className="text-lg">{t("help.emailUs")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">kodrum.mk@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">{t("help.support247")}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-teal-100">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                <CardTitle className="text-lg">{t("help.liveChat")}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
                  {t("help.startChat")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {t("help.faqTitle")}
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow border-teal-100"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-teal-700">
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-teal-100">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-teal-700">
                {t("help.stillNeedHelp")}
              </CardTitle>
              <CardDescription>
                {t("help.contactDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder={t("help.yourName")}
                  className="focus:ring-teal-500 focus:border-teal-500"
                />
                <Input
                  placeholder={t("help.yourEmail")}
                  type="email"
                  className="focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <Input
                placeholder={t("help.subject")}
                className="focus:ring-teal-500 focus:border-teal-500"
              />
              <Textarea
                placeholder={t("help.yourMessage")}
                rows={4}
                className="focus:ring-teal-500 focus:border-teal-500"
              />
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
                {t("help.sendMessage")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
