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
  duration: string;
  type: "regular" | "exam";
  level: string;
  description: string;
}

const events: CalendarEvent[] = [
  {
    id: "1",
    date: "2024-08-18",
    title: "Calculus Day 1",
    course: "Calculus",
    day: 1,
    mentor: "Borjan Dimeski",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "University",
    description:
      "Introduction to limits and continuity. Foundation concepts for calculus.",
  },
  {
    id: "2",
    date: "2024-08-19",
    title: "Calculus Day 2",
    course: "Calculus",
    day: 2,
    mentor: "Borjan Dimeski",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "University",
    description:
      "Derivatives and differentiation rules. Practical applications.",
  },
  {
    id: "3",
    date: "2024-08-20",
    title: "Calculus Day 3",
    course: "Calculus",
    day: 3,
    mentor: "Borjan Dimeski",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "University",
    description: "Integration techniques and fundamental theorem of calculus.",
  },
  {
    id: "4",
    date: "2024-08-21",
    title: "Structured Programming Day 1",
    course: "Structured Programming",
    day: 1,
    mentor: "Stefan Saveski",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "Beginner",
    description:
      "Introduction to programming concepts, variables, and basic syntax.",
  },
  {
    id: "5",
    date: "2024-08-22",
    title: "Calculus Day 4 & Structured Programming Day 2",
    course: "Calculus & Structured Programming",
    day: 4,
    mentor: "Borjan Dimeski & Stefan Saveski",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "Mixed",
    description:
      "Advanced calculus concepts and control structures in programming.",
  },
  {
    id: "6",
    date: "2024-08-23",
    title: "Calculus Day 5 & Structured Programming Day 3",
    course: "Calculus & Structured Programming",
    day: 5,
    mentor: "Borjan Dimeski & Stefan Saveski",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "Mixed",
    description: "Applications of calculus and functions in programming.",
  },
  {
    id: "7",
    date: "2024-08-24",
    title: "Calculus Day 6",
    course: "Calculus",
    day: 6,
    mentor: "Borjan Dimeski",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "University",
    description: "Series and sequences. Preparation for final exam.",
  },
  {
    id: "8",
    date: "2024-08-25",
    title: "Structured Programming EXAM DAY",
    course: "Structured Programming",
    day: 0,
    mentor: "Stefan Saveski",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "exam",
    level: "Beginner",
    description:
      "Final examination for Structured Programming course. Practical coding test.",
  },
  {
    id: "9",
    date: "2024-08-29",
    title: "Algorithms and Data Structures Day 1",
    course: "Algorithms and Data Structures",
    day: 1,
    mentor: "Boris Gj.",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "Intermediate",
    description:
      "Introduction to algorithms, complexity analysis, and basic data structures.",
  },
  {
    id: "10",
    date: "2024-08-30",
    title: "Algorithms and Data Structures Day 2",
    course: "Algorithms and Data Structures",
    day: 2,
    mentor: "Boris Gj.",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "Intermediate",
    description:
      "Sorting algorithms, searching techniques, and array operations.",
  },
  {
    id: "11",
    date: "2024-08-31",
    title: "Algorithms and Data Structures Day 3",
    course: "Algorithms and Data Structures",
    day: 3,
    mentor: "Boris Gj.",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "regular",
    level: "Intermediate",
    description: "Trees, graphs, and advanced data structure implementations.",
  },
  {
    id: "12",
    date: "2024-09-01",
    title: "Algorithms and Data Structures EXAM DAY",
    course: "Algorithms and Data Structures",
    day: 0,
    mentor: "Boris Gj.",
    time: "17:00 - 20:00",
    duration: "3 hours",
    type: "exam",
    level: "Intermediate",
    description:
      "Final examination for Algorithms and Data Structures. Problem-solving test.",
  },
];

export default function EventsCalendar() {
  const { t } = useTranslation();
  const monthNames = t("calendar.months", { returnObjects: true }) as string[];
  const dayNames = t("calendar.days", { returnObjects: true }) as string[];
  
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [currentDate, setCurrentDate] = useState(new Date(2024, 7)); // August 2024
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
          {t("calendar.title")}
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
            <span className="sr-only">{t("calendar.prevMonth")}</span>
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
            <span className="sr-only">{t("calendar.nextMonth")}</span>
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

          return (
            <div
              key={day}
              className="h-16 sm:h-24 border border-gray-200 p-1 relative hover:bg-gray-50 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-1"
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
                        event.type === "exam" ? "bg-yellow-500" : "bg-green-600"
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

          {selectedEvent && (
            <div className="space-y-4" id="event-description">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    selectedEvent.type === "exam" ? "destructive" : "default"
                  }
                >
                  {selectedEvent.type === "exam" ? t("calendar.examDay") : t("calendar.regularClass")}
                </Badge>
                <Badge variant="outline">{selectedEvent.level}</Badge>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen
                    className="h-4 w-4 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{t("calendar.course")}:</span>
                  <span>{selectedEvent.course}</span>
                </div>

                {selectedEvent.day > 0 && (
                  <div className="flex items-center gap-2">
                    <Award
                      className="h-4 w-4 text-gray-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-medium">{t("calendar.day")}:</span>
                    <span>{t("calendar.day")} {selectedEvent.day}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <User
                    className="h-4 w-4 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{t("calendar.mentor")}:</span>
                  <span>{selectedEvent.mentor}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar
                    className="h-4 w-4 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{t("calendar.date")}:</span>
                  <span>
                    {new Date(selectedEvent.date).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock
                    className="h-4 w-4 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{t("calendar.time")}:</span>
                  <span>{selectedEvent.time}</span>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-600">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
