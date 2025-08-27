"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  User,
  Search,
  TrendingUp,
  BookOpen,
  Award,
} from "lucide-react";

export default function BlogPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Education: Transforming How We Learn",
      excerpt:
        "Explore how artificial intelligence is revolutionizing educational methods and creating personalized learning experiences for students of all ages.",
      category: "tech-news",
      author: "Dr. Marija Stojanovic",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "From Zero to Full-Stack Developer: Ana's Success Story",
      excerpt:
        "Meet Ana, a former marketing professional who transformed her career through our programming courses and now works at a leading tech company.",
      category: "success-stories",
      author: "Elena Georgievska",
      date: "2024-01-10",
      readTime: "3 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "5 Essential Programming Languages to Learn in 2024",
      excerpt:
        "Discover which programming languages are in highest demand and will give you the best career opportunities in the current tech landscape.",
      category: "learning-tips",
      author: "Aleksandar Petrovic",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "Making Math Fun: How We Engage Young Learners",
      excerpt:
        "Learn about our innovative approaches to teaching mathematics that make complex concepts accessible and enjoyable for children.",
      category: "learning-tips",
      author: "Prof. Stefan Dimitrov",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "Cybersecurity Trends: What Every Professional Should Know",
      excerpt:
        "Stay ahead of cyber threats with insights into the latest security trends and best practices for protecting digital assets.",
      category: "tech-news",
      author: "Nikola Trajkovski",
      date: "2024-01-03",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "Teen Programmer Wins National Coding Competition",
      excerpt:
        "Congratulations to our student Marko who won first place in the National Youth Programming Championship using skills learned in our courses.",
      category: "success-stories",
      author: "Ana Nikolova",
      date: "2023-12-28",
      readTime: "2 min read",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Posts", icon: BookOpen },
    { id: "tech-news", label: "Tech News", icon: TrendingUp },
    { id: "learning-tips", label: "Learning Tips", icon: BookOpen },
    { id: "success-stories", label: "Success Stories", icon: Award },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tech-news":
        return "bg-teal-100 text-teal-700";
      case "learning-tips":
        return "bg-green-100 text-green-700";
      case "success-stories":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-cyan-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Latest Insights & Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-6">
              Blog & News
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover the latest in technology education, inspiring success
              stories, and expert insights
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-3 border-teal-200 focus:border-teal-500 focus:ring-teal-500 rounded-xl"
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                        : "border-teal-200 text-teal-700 hover:bg-teal-50"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "all" && (
        <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-4">
                Featured Article
              </h2>
              <p className="text-xl text-gray-600">
                Don't miss our latest featured content
              </p>
            </div>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-teal-50/20">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-teal-100 text-teal-700"
                    >
                      Featured
                    </Badge>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-teal-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-teal-900 mb-2">
              Latest Articles
            </h2>
            <p className="text-teal-600">
              Explore our collection of educational content and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-teal-900 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-teal-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-teal-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-teal-50 hover:bg-teal-100 text-teal-700"
                  >
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-teal-500 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
