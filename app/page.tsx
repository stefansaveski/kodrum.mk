"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { GraduationCap, MapPin } from "lucide-react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="">
      <section className="flex flex-col md:flex-row content-center justify-between text-base md:text-lg ml-2 md:ml-5">
        <div className="flex">
          <Image
            src="/pfp-logo.jpg"
            alt="logo"
            width="80"
            height="80"
            className="md:w-[100px] md:h-[100px]"
          />
          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden absolute top-6 right-6 z-20 p-2 rounded focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Open navigation"
          >
            <span className="block w-6 h-1 bg-teal-800 mb-1 rounded"></span>
            <span className="block w-6 h-1 bg-teal-800 mb-1 rounded"></span>
            <span className="block w-6 h-1 bg-teal-800 rounded"></span>
          </button>
          {/* Navigation links */}
          <div
            className={`flex flex-col md:flex-row md:justify-start justify-start items-start lg:justify-center lg:items-center font-medium w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4
            bg-white/90 md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none p-4 md:p-0 absolute md:static top-16 left-0 right-0 z-10 transition-all duration-300
            ${navOpen ? "block" : "hidden md:flex"}`}
          >
            <Link
              href="#courses"
              className="p-3 md:p-5 hover:text-teal-800 hover:scale-110 hover:underline transition-all duration-200 cursor-pointer rounded-lg bg-white/80 hover:bg-teal-100"
            >
              Курсеви
            </Link>
            <Link
              href="#events"
              className="p-3 md:p-5 hover:text-teal-800 hover:scale-110 hover:underline transition-all duration-200 cursor-pointer rounded-lg bg-white/80 hover:bg-teal-100"
            >
              Настани
            </Link>
            <Link
              href="#tutoring"
              className="p-3 md:p-5 hover:text-teal-800 hover:scale-110 hover:underline transition-all duration-200 cursor-pointer rounded-lg bg-white/80 hover:bg-teal-100"
            >
              Индивидуални часови
            </Link>
          </div>
        </div>

        <div className="flex items-center mr-5">
          <a
            href="https://instagram.com/kodrum_mk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors mr-3"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
          <div className="inline-flex items-center gap-2 px-3 py-1 p-3 lg:p-3 lg:px-5 ml-0 lg:ml-5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium w-fit hover:scale-120 transition-transform cursor-pointer">
            <Link href="https://discord.gg/YVXYpMQra5">
              Join our Discord
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-cover bg-center w-full lg:h-100 bg-[url('/hero.jpg')] rounded flex flex-col lg:flex-row">
        <div className="bg-gradient-to-b lg:bg-gradient-to-r from-teal-600/65 via-teal-600/65 to-teal-600/0 rounded w-full lg:w-200 h-full ml-0  p-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 p-3 lg:p-3 ml-0 lg:ml-5 mt-5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            IT Hub for Modern Learning
          </div>
          <h1 className="p-3 lg:text-9xl text-4xl sm:text-6xl md:text-7xl text-center md:text-left font-bold text-white drop-shadow-lg">
            КОДРУМ
          </h1>
          <p className="p-3 lg:p-5 text-white text-base sm:text-lg font-bold drop-shadow-lg">
            Kodrum е едукативен центар создаден од студенти за студенти. Наша
            цел е да создадеме простор каде што знаењето се споделува и
            стекнува. Организираме најразлични настани, како и приватни часови
            за студенти на кои им е потребна помош во одредени предмети.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mr-5 flex flex-col items-center">
          <h1 className="text-white text-shadow-md drop-shadow-sm font-bold text-2xl md:text-3xl text-center bg-teal-600/65 rounded-full w-full lg:w-150 m-3 lg:m-5 p-2">
            Пријави се на следен настан!
          </h1>
          <div className="flex">
            <div className=" bg-teal-600/65 rounded-xl flex flex-col justify-between m-2 p-4">
              <h2 className="p-2 font-bold text-xl md:text-2xl text-center text-[#FDFBD4] text-shadow-md drop-shadow-sm m-2">
                <span className="text-white">
                  Тридневна припрема/подготовка
                </span>{" "}
                <br></br>Структурно Програмирање
              </h2>
              <Button className="p-3 md:p-5 m-2 text-base md:text-lg font-bold cursor-pointer hover:scale-110">
                <Link href="https://forms.gle/PxPqb3dFHMzkNiDYA">
                  Аплицирај
                </Link>
              </Button>
            </div>
            <div className=" bg-teal-600/65 rounded-xl flex flex-col justify-between m-2 p-4">
              <h2 className="p-2 font-bold text-xl md:text-2xl text-center text-[#FDFBD4] text-shadow-md drop-shadow-sm m-2">
                <span className="text-white">
                  Тридневна припрема/подготовка
                </span>{" "}
                <br></br> Алгоритми и Податочни Структури
              </h2>
              <Button className="p-3 md:p-5 m-2 text-base md:text-lg font-bold cursor-pointer hover:scale-110">
                <Link href="https://forms.gle/Bek96ixvsJ4T9Y1a6">
                  Аплицирај
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="events" className="flex flex-col w-full justify-center items-center mt-10">
        <h1 className="text-2xl md:text-4xl text-shadow-sm mb-5 bg-teal-500 p-2 md:p-4 rounded-full text-white font-lg">
          Календар за настани
        </h1>
        <div className="w-full md:w-1/2">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            initialDate="2025-08-01"
            validRange={{
              start: "2025-08-01",
              end: "2025-09-10",
            }}
            weekends={true}
            events={[
              { title: "Day 1 - Структурно", date: "2025-08-21" },
              { title: "Day 2 - Структурно", date: "2025-08-22" },
              { title: "Day 3 - Структурно", date: "2025-08-23" },
              { title: "Испит Структруно", date: "2025-08-25" },
              { title: "Испит Алгоритми", date: "2025-09-01" },
              { title: "Day 1 - Алгоритми", date: "2025-08-29" },
              { title: "Day 2 - Алгоритми", date: "2025-08-30" },
              { title: "Day 3 - Алгоритми", date: "2025-08-31" },
            ]}
            eventBackgroundColor="#14b8a6"
            eventBorderColor="#14b8a6"
            headerToolbar={{
              left: "",
              center: "title",
              right: "",
            }}
          />
        </div>
      </section>
      <section
        id="tutoring"
        className="flex flex-col lg:flex-row justify-center items-center w-full mt-10 gap-4"
      >
        <div className="flex flex-col ml-5 w-full lg:w-1/3 px-2 justify-center items-center">
          <h1 className="text-2xl md:text-4xl text-teal-500 w-full md:w-full text-center">
            Индивидуални часови
          </h1>
          <ul className="space-y-3 mt-4 flex flex-col">
            {[
              "Структруно Програмирање",
              "Објектно-ориентирано програмирање",
              "Алгоритми и Податочни структури",
              "Вештачка интелигенција",
              "Оперативни системи",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center text-base md:text-lg w-full"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 ml-2 rounded-full bg-teal-500 text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 flex flex-col sm:flex-row justify-center items-center">
          <div className="w-full sm:w-1/2 flex justify-center">
            <Card className="bg-teal-600/80 rounded-xl shadow-lg text-white p-4">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-teal-200 w-5 h-5"
                  />{" "}
                  Stefan Saveski
                </CardTitle>
                <CardDescription className="text-teal-200 text-base">
                  Competitive Programmer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-teal-200 w-4 h-4"
                  />
                  <span className="text-sm">075 295 582</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-teal-200 w-4 h-4"
                  />
                  <a
                    href="mailto:stefansaveski19@gmail.com"
                    className="text-teal-200 hover:underline text-sm"
                  >
                    stefansaveski19@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-teal-200 w-4 h-4"
                  />
                  <a
                    href="https://instagram.com/stefan_saveski"
                    className="text-teal-200 hover:underline text-sm"
                    target="_blank"
                  >
                    @stefan_saveski
                  </a>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <a
                  href="sms:075295582"
                  className="bg-teal-500 text-white font-bold px-4 py-1 rounded-lg hover:bg-teal-700 transition-all text-sm flex items-center justify-center"
                >
                  Book a session
                </a>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <Card className="bg-teal-600/80 rounded-xl shadow-lg text-white p-4">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-teal-200 w-5 h-5"
                  />{" "}
                  Boris Gjorgjievski
                </CardTitle>
                <CardDescription className="text-teal-200 text-base">
                  Competitive Programmer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-teal-200 w-4 h-4"
                  />
                  <span className="text-sm">074 203 393</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-teal-200 w-4 h-4"
                  />
                  <a
                    href="mailto:boris696boris@gmail.com"
                    className="text-teal-200 hover:underline text-sm"
                  >
                    boris696boris@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-teal-200 w-4 h-4"
                  />
                  <a
                    href="https://www.instagram.com/bo.r.iss/"
                    className="text-teal-200 hover:underline text-sm"
                    target="_blank"
                  >
                    @bo.r.iss
                  </a>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <a
                  href="sms:074203393"
                  className="bg-teal-500 text-white font-bold px-4 py-1 rounded-lg hover:bg-teal-700 transition-all text-sm flex items-center justify-center"
                >
                  Book a session
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <footer className="bg-slate-900 text-slate-300 mt-10">
        <div className="container py-16 p-10">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="rounded-xl bg-gradient-to-r from-teal-500 to-emerald-400 p-2 shadow-lg shadow-teal-500/20">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Kodrum
                </span>
              </div>
              <p className="text-slate-400 mb-6">
                Your premium destination for IT events, specialized training,
                and personalized tutoring.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com/kodrum_mk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-200 transition-colors"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
                <a
                  href="https://discord.gg/YVXYpMQra5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-200 transition-colors"
                  aria-label="Discord"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.447.864-.614 1.249a18.233 18.233 0 0 0-5.487 0 12.683 12.683 0 0 0-.625-1.249.07.07 0 0 0-.073-.035A19.736 19.736 0 0 0 3.683 4.369a.064.064 0 0 0-.028.027C.533 8.159-.32 11.87.099 15.539a.08.08 0 0 0 .031.056c2.052 1.507 4.042 2.422 5.993 3.029a.07.07 0 0 0 .078-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 0 0-.038-.098c-.652-.247-1.273-.545-1.872-.883a.07.07 0 0 1-.007-.117c.126-.094.252-.19.373-.287a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .075.009c.121.097.247.193.373.287a.07.07 0 0 1-.006.117 12.298 12.298 0 0 1-1.873.883.07.07 0 0 0-.037.098c.36.699.772 1.364 1.226 1.994a.07.07 0 0 0 .078.027c1.957-.607 3.947-1.522 5.993-3.029a.08.08 0 0 0 .031-.056c.5-4.09-.838-7.765-3.588-11.143a.061.061 0 0 0-.028-.027ZM8.02 14.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419Zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#events"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    Events & Seminars
                  </Link>
                </li>
                <li>
                  <Link
                    href="#community"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#tutoring"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    Private Tutoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-teal-400 mt-0.5" />
                  <span className="text-slate-400">Todor Changov 88</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-3 text-teal-400 mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-slate-400">+389 75 295 582</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-3 text-teal-400 mt-0.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-slate-400">kodrum.mk@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              © 2025 Kodrum. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 mt-4 md:mt-0">
              Designed with <span className="text-teal-500">♥</span> for the
              tech community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
