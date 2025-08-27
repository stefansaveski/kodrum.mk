import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Stories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our graduates are making their mark in the tech industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Marko Petrovski",
              role: "Software Engineer at Google",
              course: "Full Stack Development",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
              quote:
                "Kodrum gave me the foundation I needed to land my dream job at Google.",
            },
            {
              name: "Ana Dimitrova",
              role: "Data Scientist at Microsoft",
              course: "AI & Machine Learning",
              image:
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
              quote:
                "The practical approach at Kodrum prepared me for real-world challenges.",
            },
            {
              name: "Stefan Nikolov",
              role: "Startup Founder",
              course: "Programming & Algorithms",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
              quote:
                "I learned not just to code, but to think like an entrepreneur.",
            },
          ].map((story, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-teal-50/30"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-sm opacity-30 scale-110"></div>
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="relative w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-2">{story.role}</p>
                <Badge className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border-0 mb-4">
                  {story.course}
                </Badge>
                <p className="text-gray-600 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
