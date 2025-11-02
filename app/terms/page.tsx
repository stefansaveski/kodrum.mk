"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function TermsPage() {
  const { t } = useTranslation();
  const enrollmentItems = t("terms.enrollment.items", { returnObjects: true }) as string[];
  const attendanceItems = t("terms.attendance.items", { returnObjects: true }) as string[];
  const refundItems = t("terms.refund.items", { returnObjects: true }) as string[];
  const intellectualItems = t("terms.intellectual.items", { returnObjects: true }) as string[];
  const liabilityItems = t("terms.liability.items", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("terms.title")}
          </h1>
          <p className="text-xl text-gray-600">
            {t("terms.subtitle")}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("terms.enrollment.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                {enrollmentItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("terms.attendance.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                {attendanceItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("terms.refund.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                {refundItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card> */}

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("terms.intellectual.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                {intellectualItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("terms.liability.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                {liabilityItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("terms.modifications.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>{t("terms.modifications.content")}</p>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("terms.contactInfo.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t("terms.contactInfo.intro")}</p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>{t("terms.contactInfo.email")}:</strong> kodrum.mk@gmail.com
                </p>
                <p>
                  <strong>{t("terms.contactInfo.phone")}:</strong> +389 75 295{" "}582
                </p>
                <p>
                  <strong>{t("terms.contactInfo.address")}:</strong> {t("terms.contactInfo.addressValue")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
