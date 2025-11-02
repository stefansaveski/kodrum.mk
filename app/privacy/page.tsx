"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function PrivacyPage() {
  const { t } = useTranslation();
  const infoCollectItems = t("privacy.infoCollect.items", { returnObjects: true }) as string[];
  const howWeUseItems = t("privacy.howWeUse.items", { returnObjects: true }) as string[];
  const sharingItems = t("privacy.sharing.items", { returnObjects: true }) as string[];
  const securityItems = t("privacy.security.items", { returnObjects: true }) as string[];
  const rightsItems = t("privacy.rights.items", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("privacy.title")}
          </h1>
          <p className="text-xl text-gray-600">
            {t("privacy.subtitle")}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("privacy.infoCollect.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                {t("privacy.infoCollect.intro")}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {infoCollectItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("privacy.howWeUse.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>{t("privacy.howWeUse.intro")}</p>
              <ul className="list-disc pl-6 space-y-1">
                {howWeUseItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("privacy.sharing.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                {t("privacy.sharing.intro")}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {sharingItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("privacy.security.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                {t("privacy.security.intro")}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {securityItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("privacy.rights.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>{t("privacy.rights.intro")}</p>
              <ul className="list-disc pl-6 space-y-1">
                {rightsItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                {t("privacy.rights.exercise")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                {t("privacy.contactUs.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {t("privacy.contactUs.intro")}
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>{t("privacy.contactUs.email")}:</strong> kodrum.mk@gmail.com
                </p>
                <p>
                  <strong>{t("privacy.contactUs.phone")}:</strong> +389 75 295{" "}582
                </p>
                <p>
                  <strong>{t("privacy.contactUs.address")}:</strong> {t("privacy.contactUs.addressValue")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
