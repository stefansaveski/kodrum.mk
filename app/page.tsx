"use client";

import { HeroSection } from "@/components/hero-section";
import { FeaturedCourses } from "@/components/featured-courses";
import { Testimonials } from "@/components/testimonials";
import { TechnologyLogos } from "@/components/technology-logos";
import { ContactForm } from "@/components/contact-form";
import { UpcomingEvents } from "@/components/upcoming-events";
import { WhyKodrum } from "@/components/why-kodrum";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedCourses />
      <UpcomingEvents />
      <WhyKodrum />
      {/* <Stories /> */}
      <Testimonials />
      <TechnologyLogos />
      <ContactForm />
    </div>
  );
}
