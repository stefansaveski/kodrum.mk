"use client";

import { useTranslation } from "react-i18next";

import EventsCalendar from "./events-calendar";

export function UpcomingEvents() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
<<<<<<< HEAD
            {t("upcoming.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("upcoming.description")}
=======
            {t("hero.upcoming")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("hero.upcoming-description")}
>>>>>>> 8c9beabbc678cdbd4e468685a56c8284d155b3b0
          </p>
        </div>
        <EventsCalendar />
      </div>
    </section>
  );
}
