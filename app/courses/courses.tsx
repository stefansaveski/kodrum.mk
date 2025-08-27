import { useTranslation } from "react-i18next";

export const getCoursesData = () => {
  const { t } = useTranslation();

  return {
    programming: [
      {
        id: "structured-programming",
        slug: "structured-programming",
        title: t("courses.programming.structuredProgramming"),
        description:
          "Learn the fundamentals of programming with structured approach and best practices",
        category: "university",
        level: "Beginner",
        duration: "10 weeks",
        price: "4,500 MKD",
        technologies: ["C", "Pascal", "Algorithms"],
        ageGroup: t("courses.categories.university"),
      },
      {
        id: "object-oriented",
        slug: "object-oriented",
        title: t("courses.programming.objectOriented"),
        description:
          "Master OOP concepts with Java and C++, including inheritance, polymorphism, and design patterns",
        category: "university",
        level: "Intermediate",
        duration: "12 weeks",
        price: "5,800 MKD",
        technologies: ["Java", "C++", "UML"],
        ageGroup: t("courses.categories.university"),
      },
      {
        id: "algorithms",
        slug: "algorithms",
        title: t("courses.programming.algorithms"),
        description:
          "Deep dive into algorithms and data structures for efficient problem solving",
        category: "university",
        level: "Advanced",
        duration: "14 weeks",
        price: "6,500 MKD",
        technologies: ["Python", "Java", "Analysis"],
        ageGroup: t("courses.categories.university"),
      },
      {
        id: "ai",
        slug: "ai",
        title: t("courses.programming.ai"),
        description:
          "Introduction to artificial intelligence, machine learning, and neural networks",
        category: "adults",
        level: "Advanced",
        duration: "16 weeks",
        price: "7,000 MKD",
        technologies: ["Python", "TensorFlow", "Scikit-learn"],
        ageGroup: t("courses.categories.adults"),
      },
      {
        id: "client-side",
        slug: "client-side",
        title: t("courses.programming.clientSide"),
        description:
          "Build interactive web applications with modern JavaScript frameworks",
        category: "teens",
        level: "Intermediate",
        duration: "12 weeks",
        price: "5,200 MKD",
        technologies: ["JavaScript", "React", "HTML5"],
        ageGroup: t("courses.categories.teens"),
      },
      {
        id: "web-design",
        slug: "web-design",
        title: t("courses.programming.webDesign"),
        description:
          "Complete web design course from basics to advanced responsive design",
        category: "teens",
        level: "Beginner",
        duration: "10 weeks",
        price: "4,500 MKD",
        technologies: ["HTML", "CSS", "JavaScript"],
        ageGroup: t("courses.categories.teens"),
      },
      {
        id: "ui-design",
        slug: "ui-design",
        title: t("courses.programming.uiDesign"),
        description:
          "Learn modern UI/UX design patterns and user interface development",
        category: "adults",
        level: "Intermediate",
        duration: "8 weeks",
        price: "5,200 MKD",
        ageGroup: t("courses.categories.adults"),
      },
    ],
    math: [
      {
        id: "selected-topics",
        slug: "selected-topics",
        title: t("courses.math.selectedTopics"),
        description:
          "Explore advanced mathematical concepts and their real-world applications",
        category: "university",
        level: "Advanced",
        duration: "12 weeks",
        price: "3,800 MKD",
        technologies: ["MATLAB", "Mathematica"],
        ageGroup: t("courses.categories.university"),
      },
      {
        id: "business-stats",
        slug: "business-stats",
        title: t("courses.math.businessStats"),
        description:
          "Statistical analysis for business decision making and data interpretation",
        category: "adults",
        level: "Intermediate",
        duration: "10 weeks",
        price: "4,500 MKD",
        technologies: ["Excel", "R", "SPSS"],
        ageGroup: t("courses.categories.adults"),
      },
      {
        id: "math1",
        slug: "math1",
        title: t("courses.math.math1"),
        description:
          "Foundation mathematics covering algebra, geometry, and basic analysis",
        category: "teens",
        level: "Beginner",
        duration: "16 weeks",
        price: "3,000 MKD",
        technologies: ["GeoGebra", "Calculators"],
        ageGroup: t("courses.categories.teens"),
      },
      {
        id: "calculus1",
        slug: "calculus1",
        title: t("courses.math.calculus1"),
        description:
          "Introduction to differential calculus, limits, and derivatives",
        category: "university",
        level: "Intermediate",
        duration: "14 weeks",
        price: "4,200 MKD",
        technologies: ["Mathematica", "Graphing"],
        ageGroup: t("courses.categories.university"),
      },
      {
        id: "calculus2",
        slug: "calculus2",
        title: t("courses.math.calculus2"),
        description:
          "Integral calculus, series, and multivariable calculus fundamentals",
        category: "university",
        level: "Advanced",
        duration: "14 weeks",
        price: "4,500 MKD",
        technologies: ["Mathematica", "MATLAB"],
        ageGroup: t("courses.categories.university"),
      },
      {
        id: "math2",
        slug: "math2",
        title: t("courses.math.math2"),
        description:
          "Discrete mathematics including logic, sets, combinatorics, and graph theory",
        category: "university",
        level: "Intermediate",
        duration: "12 weeks",
        price: "3,900 MKD",
        technologies: ["Logic Tools", "Graph Software"],
        ageGroup: t("courses.categories.university"),
      },
    ],
    other: [
      {
        id: "info-theory",
        slug: "info-theory",
        title: t("courses.other.infoTheory"),
        description:
          "Mathematical foundations of information theory and data compression",
        category: "university",
        level: "Advanced",
        duration: "10 weeks",
        price: "4,900 MKD",
        technologies: ["MATLAB", "Python"],
        ageGroup: t("courses.categories.university"),
      },
      {
        id: "networks",
        slug: "networks",
        title: t("courses.other.networks"),
        description:
          "Computer networking fundamentals and cybersecurity principles",
        category: "adults",
        level: "Intermediate",
        duration: "12 weeks",
        price: "5,800 MKD",
        technologies: ["Cisco", "Wireshark", "Linux"],
        ageGroup: t("courses.categories.adults"),
      },
      {
        id: "operating-systems",
        slug: "operating-systems",
        title: t("courses.other.os"),
        description:
          "Operating system concepts, processes, memory management, and file systems",
        category: "university",
        level: "Advanced",
        duration: "14 weeks",
        price: "5,600 MKD",
        technologies: ["Linux", "Windows", "Virtual Machines"],
        ageGroup: t("courses.categories.university"),
      },
      {
        id: "architecture",
        slug: "architecture",
        title: t("courses.other.architecture"),
        description:
          "Computer architecture, processor design, and system organization",
        category: "university",
        level: "Advanced",
        duration: "12 weeks",
        price: "5,200 MKD",
        technologies: ["Assembly", "Simulators"],
        ageGroup: t("courses.categories.university"),
      },
    ],
    kids: [
      {
        id: "scratch-basics",
        slug: "scratch-basics",
        title: "Scratch Programming for Kids",
        description:
          "Fun introduction to programming concepts using visual Scratch programming",
        category: "kids",
        level: "Beginner",
        duration: "8 weeks",
        price: "2,200 MKD",
        technologies: ["Scratch", "Games"],
        ageGroup: t("courses.categories.kids"),
      },
      {
        id: "math-fun",
        slug: "math-fun",
        title: "Math Adventures",
        description:
          "Make math fun with games, puzzles, and interactive learning activities",
        category: "kids",
        level: "Beginner",
        duration: "10 weeks",
        price: "1,900 MKD",
        technologies: ["Educational Games", "Manipulatives"],
        ageGroup: t("courses.categories.kids"),
      },
    ],
    individual: [
      {
        id: "individual-programming",
        slug: "individual-programming",
        title: "Personal Programming Tutor",
        description:
          "One-on-one programming instruction tailored to your specific needs and goals",
        category: "individual",
        level: "All Levels",
        duration: "Flexible",
        price: "350 MKD/hour",
        technologies: ["Any Language", "Custom"],
        ageGroup: "All Ages",
      },
      {
        id: "individual-math",
        slug: "individual-math",
        title: "Personal Math Tutor",
        description:
          "Individual mathematics tutoring for exam preparation and skill building",
        category: "individual",
        level: "All Levels",
        duration: "Flexible",
        price: "350 MKD/hour",
        technologies: ["Custom Materials"],
        ageGroup: "All Ages",
      },
    ],
  };
};

export async function fetchCourses(p0: string) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(getCoursesData()), 100);
  });
}
