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

export default function HelpPage() {
  const faqItems = [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll by clicking the 'Enroll Now' button on any course page, or by contacting us directly through our contact form or phone.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, cash payments, and installment plans. Contact us to discuss payment options that work best for you.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course content or teaching quality.",
    },
    {
      question: "Do you offer certificates upon completion?",
      answer:
        "Yes, all students receive a certificate of completion for successfully finishing their courses.",
    },
    {
      question: "What if I miss a class?",
      answer:
        "We provide recorded sessions and makeup classes. You can also schedule individual sessions to catch up on missed content.",
    },
    {
      question: "Are there any prerequisites for advanced courses?",
      answer:
        "Yes, some advanced courses require basic knowledge. Check the course details page for specific prerequisites.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions and get support
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
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+389 70 123 456</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-teal-100">
              <CardHeader>
                <Mail className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@kodrum.mk</p>
                <p className="text-sm text-gray-500 mt-1">24/7 Support</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-teal-100">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
                  Start Chat
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
            Frequently Asked Questions
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
                Still Need Help?
              </CardTitle>
              <CardDescription>
                Send us a message and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="focus:ring-teal-500 focus:border-teal-500"
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <Input
                placeholder="Subject"
                className="focus:ring-teal-500 focus:border-teal-500"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="focus:ring-teal-500 focus:border-teal-500"
              />
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
