"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  course: string;
  day: number;
  mentor: string;
  time: string;
  type: "regular" | "exam";
  level: string;
  description: string;
}

export default function EventsCalendar() {
  const { t } = useTranslation();
  const monthNames = t("calendar.months", { returnObjects: true }) as string[];
  const dayNames = t("calendar.days", { returnObjects: true }) as string[];
  
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [currentDate, setCurrentDate] = useState(new Date());
  const [focusedDay, setFocusedDay] = useState<number | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((event) => event.date === dateStr);
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const events: CalendarEvent[] = [
    // Calculus lectures - Nov 1, 2, 8
    {
      id: "1",
      date: "2025-11-01",
      title: t("courses.math.calculus1"),
      course: t("courses.math.calculus1"),
      day: 1,
      mentor: t("mentors.mathProgramming.1.name"),
      time: "14:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.calculus"),
    },
    {
      id: "2",
      date: "2025-11-02",
      title: t("courses.math.calculus1"),
      course: t("courses.math.calculus1"),
      day: 2,
      mentor: t("mentors.mathProgramming.1.name"),
      time: "14:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.calculus"),
    },
    {
      id: "3",
      date: "2025-11-08",
      title: t("courses.math.calculus1"),
      course: t("courses.math.calculus1"),
      day: 3,
      mentor: t("mentors.mathProgramming.1.name"),
      time: "14:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.calculus"),
    },
    // Algorithms and Data Structures - Nov 7, 8, 9, 15
    {
      id: "4",
      date: "2025-11-07",
      title: t("courses.programming.algorithms"),
      course: t("courses.programming.algorithms"),
      day: 1,
      mentor: t("mentors.programming.0.name") + ", " + t("mentors.programming.3.name"),
      time: "12:00 - 15:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.aps"),
    },
    {
      id: "5",
      date: "2025-11-08",
      title: t("courses.programming.algorithms"),
      course: t("courses.programming.algorithms"),
      day: 2,
      mentor: t("mentors.programming.0.name") + ", " + t("mentors.programming.3.name"),
      time: "12:00 - 15:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.aps"),
    },
    {
      id: "6",
      date: "2025-11-09",
      title: t("courses.programming.algorithms"),
      course: t("courses.programming.algorithms"),
      day: 3,
      mentor: t("mentors.programming.0.name") + ", " + t("mentors.programming.3.name"),
      time: "12:00 - 15:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.aps"),
    },
    {
      id: "7",
      date: "2025-11-15",
      title: t("courses.programming.algorithms"),
      course: t("courses.programming.algorithms"),
      day: 4,
      mentor: t("mentors.programming.0.name") + ", " + t("mentors.programming.3.name"),
      time: "12:00 - 15:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.aps"),
    },
    // Structured Programming - Nov 7, 8, 9, 15
    {
      id: "8",
      date: "2025-11-07",
      title: t("courses.programming.structuredProgramming"),
      course: t("courses.programming.structuredProgramming"),
      day: 1,
      mentor: t("mentors.programming.0.name") + ", " + t("mentors.programming.3.name"),
      time: "15:00 - 18:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.structured"),
    },
    {
      id: "9",
      date: "2025-11-08",
      title: t("courses.programming.structuredProgramming"),
      course: t("courses.programming.structuredProgramming"),
      day: 2,
      mentor: t("mentors.programming.0.name") + ", " + t("mentors.programming.3.name"),
      time: "15:00 - 18:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.structured"),
    },
    {
      id: "10",
      date: "2025-11-09",
      title: t("courses.programming.structuredProgramming"),
      course: t("courses.programming.structuredProgramming"),
      day: 3,
      mentor: t("mentors.programming.0.name") + ", " + t("mentors.programming.3.name"),
      time: "15:00 - 18:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.structured"),
    },
    {
      id: "11",
      date: "2025-11-15",
      title: t("courses.programming.structuredProgramming"),
      course: t("courses.programming.structuredProgramming"),
      day: 4,
      mentor: t("mentors.programming.0.name") + ", " + t("mentors.programming.3.name"),
      time: "15:00 - 18:00",
      type: "regular",
      level: t("upcoming.beginner"),
      description: t("upcoming.desc.structured"),
    },
  ];

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent, day: number) => {
    const dayEvents = getEventsForDate(day);

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if (dayEvents.length > 0) {
          setSelectedEvent(dayEvents[0]);
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        setFocusedDay(day < daysInMonth ? day + 1 : 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        setFocusedDay(day > 1 ? day - 1 : daysInMonth);
        break;
      case "ArrowDown":
        event.preventDefault();
        setFocusedDay(day + 7 <= daysInMonth ? day + 7 : day);
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedDay(day - 7 >= 1 ? day - 7 : day);
        break;
    }
  };

  useEffect(() => {
    if (focusedDay && calendarRef.current) {
      const dayButton = calendarRef.current.querySelector(
        `[data-day="${focusedDay}"]`
      ) as HTMLElement;
      dayButton?.focus();
    }
  }, [focusedDay]);

  return (
    <section
      className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6"
      aria-labelledby="calendar-heading"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2
          id="calendar-heading"
          className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2"
        >
          <Calendar
            className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
            aria-hidden="true"
          />
          {t("upcoming.calendar")}
        </h2>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevMonth}
            aria-label={`Go to ${
              monthNames[currentDate.getMonth() - 1] || "December"
            } ${
              currentDate.getMonth() === 0
                ? currentDate.getFullYear() - 1
                : currentDate.getFullYear()
            }`}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">{t("upcoming.prev_month")}</span>
          </Button>
          <span
            className="text-base sm:text-lg font-semibold min-w-[120px] sm:min-w-[150px] text-center"
            aria-live="polite"
          >
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={nextMonth}
            aria-label={`Go to ${
              monthNames[currentDate.getMonth() + 1] || "January"
            } ${
              currentDate.getMonth() === 11
                ? currentDate.getFullYear() + 1
                : currentDate.getFullYear()
            }`}
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">{t("upcoming.next_month")}</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2 sm:mb-4" role="row">
        {dayNames.map((day) => (
          <div
            key={day}
            className="p-1 sm:p-2 text-center font-semibold text-gray-600 bg-gray-50 text-xs sm:text-sm"
            role="columnheader"
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.slice(0, 1)}</span>
          </div>
        ))}
      </div>

      <div
        ref={calendarRef}
        className="grid grid-cols-7 gap-1"
        role="grid"
        aria-label="Calendar grid"
      >
        {Array.from({ length: firstDay }, (_, i) => (
          <div
            key={`empty-${i}`}
            className="h-16 sm:h-24 bg-gray-50"
            role="gridcell"
            aria-hidden="true"
          ></div>
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dayEvents = getEventsForDate(day);
          const hasEvents = dayEvents.length > 0;
          const heightClass = dayEvents.length > 1 
            ? "h-24 sm:h-32" 
            : "h-16 sm:h-24";

          return (
            <div
              key={day}
              className={`${heightClass} border border-gray-200 p-1 relative hover:bg-gray-50 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-1`}
              role="gridcell"
              aria-label={`${day} ${
                monthNames[currentDate.getMonth()]
              } ${currentDate.getFullYear()}${
                hasEvents
                  ? `, ${dayEvents.length} event${
                      dayEvents.length > 1 ? "s" : ""
                    }`
                  : ""
              }`}
            >
              <button
                data-day={day}
                className="w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 rounded"
                onClick={() => hasEvents && setSelectedEvent(dayEvents[0])}
                onKeyDown={(e) => handleKeyDown(e, day)}
                disabled={!hasEvents}
                aria-describedby={hasEvents ? `events-${day}` : undefined}
              >
                <div className="text-xs sm:text-sm font-medium text-gray-900 mb-1">
                  {day}
                </div>
                <div className="space-y-1" id={`events-${day}`}>
                  {dayEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className={`w-full text-xs p-1 rounded text-white truncate ${
                        event.type === "exam" ? "bg-yellow-600" : "bg-green-600"
                      }`}
                      title={event.title}
                      aria-label={`${event.title}, ${event.time}`}
                    >
                      <span className="hidden sm:inline">
                        {event.course.split(" ")[0]}
                      </span>
                      <span className="sm:hidden">
                        {event.course.slice(0, 3)}
                      </span>
                    </div>
                  ))}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent
          className="max-w-sm sm:max-w-md mx-4"
          aria-describedby="event-description"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
              <BookOpen
                className="h-4 w-4 sm:h-5 sm:w-5 text-green-600"
                aria-hidden="true"
              />
              {selectedEvent?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedEvent &&
            (() => {
              const dayEvents = getEventsForDate(
                new Date(selectedEvent.date).getDate()
              );
              const currentIndex = dayEvents.findIndex(
                (event) => event.id === selectedEvent.id
              );
              const hasMultipleEvents = dayEvents.length > 1;

              return (
                <>
                  {hasMultipleEvents && (
                    <div className="flex items-center justify-between mb-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setSelectedEvent(dayEvents[currentIndex - 1])
                        }
                        disabled={currentIndex === 0}
                        aria-label="Previous event"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-gray-500">
                        {currentIndex + 1} / {dayEvents.length}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setSelectedEvent(dayEvents[currentIndex + 1])
                        }
                        disabled={currentIndex === dayEvents.length - 1}
                        aria-label="Next event"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  <div className="space-y-4" id="event-description">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        className={
                          selectedEvent.type === "exam"
                            ? "bg-red-600 text-white hover:bg-red-700"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }
                      >
                        {selectedEvent.type === "exam"
                          ? t("upcoming.exam")
                          : t("upcoming.class")}
                      </Badge>
                      <Badge variant="outline">{selectedEvent.level}</Badge>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <BookOpen
                          className="h-4 w-4 text-gray-500 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-medium">
                          {t("upcoming.course")}
                        </span>
                        <span>{selectedEvent.course}</span>
                      </div>

                      {selectedEvent.day > 0 && (
                        <div className="flex items-center gap-2">
                          <Award
                            className="h-4 w-4 text-gray-500 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-medium">
                            {t("upcoming.day")}
                          </span>
                          <span>
                            {t("upcoming.dayX")} {selectedEvent.day}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <User
                          className="h-4 w-4 text-gray-500 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-medium">
                          {t("upcoming.mentor")}
                        </span>
                        <span>{selectedEvent.mentor}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar
                          className="h-4 w-4 text-gray-500 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-medium">
                          {t("upcoming.date")}
                        </span>
                        <span>
                          {new Date(selectedEvent.date)
                            .toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })
                            .replace(/\//g, ".")}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock
                          className="h-4 w-4 text-gray-500 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-medium">
                          {t("upcoming.time")}
                        </span>
                        <span>{selectedEvent.time}</span>
                      </div>

                      <div className="pt-2 border-t">
                        <p className="text-sm text-gray-600">
                          {selectedEvent.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
        </DialogContent>
      </Dialog>
    </section>
  );
}
