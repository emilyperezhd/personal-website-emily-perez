import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Palette, Zap, Users, Menu, X, Bot, GitBranch, ShieldCheck, Cloud } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [skillsModalOpen, setSkillsModalOpen] = useState(false);

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Education', 'Contact'];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  };

  const projects = [
    {
      title: "My Study App",
thumbnail: "/StudyAppThumbnail.png",
      description: "Personal study assistant that transforms class notes into quizzes, study guides, and practice exams",
      readme: {
        overview: "An intelligent, AI-powered study assistant that transforms PDF lecture notes into interactive learning tools. Upload slides, textbooks, or notes, and the application automatically generates study guides, quizzes, flashcards, and crossword puzzles to help users master the material.",
        features: [
          "Secure Authentication: Multi-user support via Clerk. Users can only access their own private study sets.",
          "Document Ingestion: Robust PDF text extraction using unpdf and pdf-parse, capable of handling complex layouts.",
          "AI Study Guides: Automatically summarizes complex documents into clean, formatted HTML study notes.",
          "Interactive Flashcards: Generates 30-card decks with a smooth 3D flip animation for active recall.",
          "Practice Quizzes: Quick 5-question multiple-choice quizzes to test immediate retention.",
          "Mock Exams: Full 20-question midterms that simulate a real test environment and provide detailed explanations for every answer.",
          "Crossword Puzzles: Gamified learning using a custom algorithm to build valid, intersecting crossword grids from specific notes.",
          "Progress Tracking: Persists history of all quiz and exam attempts to visualize mastery over time.",
          "Aesthetic UI: A custom, modern interface with a responsive Pink/Teal/Green visual theme."
        ],
        techStack: ["Next.js 16 (App Router, Server Actions)", "TypeScript", "Tailwind CSS + Typography", "PostgreSQL (via Neon Serverless)", "Prisma", "Clerk", "LangChain + OpenAI (GPT-4o)", "Vercel"]
      },
      tech: ["Next.js", "TypeScript", "PostgreSQL", "AI/ML"],
      emoji: "📚",
      color: "bg-blue-500",
      github: "https://github.com/emilyperezhd/my-study-app",
      liveUrl: "https://my-study-tool.vercel.app"
    },
    {
      title: "TravelPal",
      thumbnail: "/TravelPalThumbnail.png",
      description: "Full-stack Next.js app that helps travelers craft sustainable, personalized itineraries with Google Gemini AI",
      readme: {
        overview: "Created by Ivan Sostaric, Emily Perez, and Shelly Normatov at GDSCHacks 2025. We teamed up to build TravelPal, a full-stack Next.js & Convex app that helps travellers craft sustainable, personalized itineraries with the power of Google Gemini.",
        features: [
          "User Authentication: Secure sign-in/sign-up powered by Clerk.",
          "AI-Generated Itineraries: Gemini-driven prompts produce day-by-day eco-tips and low-impact activities. Calculates each travel leg's distance (km) and estimated CO₂ emissions (kg).",
          "Profile Dashboard: Responsive grid view of all your travel plans.",
          "Eco-Mode tab: Summarizes daily carbon footprints and offers greener alternatives."
        ],
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Convex", "Clerk", "Google Gemini via REST"],
        accomplishments: [
          "Delivered a full end-to-end voice/chat interface with Vapi for live AI calls.",
          "Achieved zero-carbon-thinking UI: daily stats + actionable eco-tips.",
          "Automated hero image generation—no manual image assets required."
        ],
        learnings: "This was our first hackathon, and we learned how to build a full-stack application, collaborate effectively in a team setting, and deploy a fully working webapp."
      },
      tech: ["Next.js", "TypeScript", "Convex", "Google Gemini"],
      emoji: "✈️",
      color: "bg-green-500",
      github: "https://github.com/emilyperezhd/gdschacks25",
      liveUrl: "https://travelpal-taupe.vercel.app"
    },
    {
      title: "Travel Blog",
      thumbnail: "/TravelBlogThumbnail.png",
      description: "Personal travel blog showcasing destinations and memorable experiences, built with pure HTML & CSS",
      readme: {
        overview: "This project is a personal travel blog website showcasing destinations I have visited across North America, Central America, and Europe. The site highlights when each destination was visited, key experiences, travel photos, and curated travel tips for both beach vacations and tourist-focused trips. The website was developed as part of a Web Development course project with strict constraints to use only HTML and CSS. The project received a final grade of 100%.",
        features: [
          "Organized travel destinations by region",
          "Visit timelines with key highlights",
          "Integrated travel photography",
          "Travel tips for beach vacations and tourist-heavy travel",
          "Clean, responsive layout built with semantic HTML and CSS"
        ],
        techStack: ["HTML5", "CSS3"],
        constraints: [
          "HTML and CSS only",
          "No JavaScript or front-end frameworks",
          "Emphasis on structure, layout, and styling fundamentals"
        ],
        learnings: [
          "Semantic HTML structure and accessibility best practices",
          "CSS layout techniques including Flexbox and responsive design",
          "Creating maintainable and readable stylesheets",
          "Designing user-friendly, content-focused web pages without JavaScript",
          "Translating design requirements into a functional static website"
        ],
        note: "This project is actively maintained and updated as I continue to travel. New destinations, photos, highlights, and travel tips are added over time."
      },
      tech: ["HTML", "CSS"],
      emoji: "🌍",
      color: "bg-purple-500",
      github: "https://github.com/emilyperezhd/travel-blog-website",
      liveUrl: "https://travel-blog-website-emily-perez.vercel.app/home.html"
    }
  ];

  const skills = [
    { icon: Code2, title: "Full-Stack & Frontend Development", desc: "React.js, Next.js, TypeScript, JavaScript (ES6), Webpack, Bootstrap, SCSS, Tailwind" },
    { icon: Zap, title: "APIs & Integrations", desc: "REST APIs, API migrations & architecture, Shopify Admin API, Webhooks" },
    { icon: Bot, title: "AI & Automation", desc: "Microsoft Copilot / Agent Builder, Power Automate, Microsoft Lists & Forms" },
    { icon: GitBranch, title: "Agile & DevOps", desc: "Scrum, Jira, Confluence, Jenkins, CI/CD, SonarQube, unit testing, Git/GitHub, Docker" },
    { icon: Palette, title: "Data & Analytics", desc: "Excel, PowerBI, data analysis, data cleaning & organization" },
    { icon: ShieldCheck, title: "Governance & Change", desc: "Governance and risk frameworks, change management, stakeholder communications" },
    { icon: Users, title: "Communication & Leadership", desc: "VP Communications, presenting, mentoring, teamwork, bilingual (English & Spanish)" },
    { icon: Cloud, title: "Cloud (AWS)", desc: "Preparing for AWS certification (January 2027)" }
  ];

  const skillSections = [
    {
      title: "Programming Languages",
      type: "chips",
      chip: "bg-purple-100 text-purple-700",
      items: ["JavaScript (ES6)", "TypeScript", "Java", "Python", "C", "SQL", "HTML", "CSS/SCSS"]
    },
    {
      title: "Frontend",
      type: "chips",
      chip: "bg-purple-100 text-purple-700",
      items: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS", "Webpack", "Responsive UI", "UX Design"]
    },
    {
      title: "Backend, APIs & Data",
      type: "chips",
      chip: "bg-blue-100 text-blue-700",
      items: ["Node.js", "REST APIs", "API Migration & Architecture", "Shopify Admin API", "Webhooks", "MongoDB", "PostgreSQL (Neon)", "Prisma", "Convex", "Clerk", "Excel", "PowerBI"]
    },
    {
      title: "Agile & DevOps",
      type: "chips",
      chip: "bg-blue-100 text-blue-700",
      items: ["Agile/Scrum", "Jira", "Confluence", "Jenkins", "CI/CD", "SonarQube", "Unit Testing", "Docker", "Git", "GitHub"]
    },
    {
      title: "AI & Process Automation",
      type: "chips",
      chip: "bg-purple-100 text-purple-700",
      items: ["Microsoft Copilot / Agent Builder", "Power Automate", "Microsoft Lists and Forms", "LangChain + OpenAI", "Data Analysis (Excel)", "Governance and Risk Frameworks", "Change Management", "Stakeholder Communications"]
    },
    {
      title: "Software Development",
      type: "list",
      items: [
        "AWS Certification (January 2027)",
        "Assembly language",
        "Object-Oriented Programming",
        "File I/O",
        "Data Structures",
        "Memory Management",
        "Debugging",
        "API Integration",
        "UX Design"
      ]
    },
    {
      title: "Tools & Platforms",
      type: "chips",
      chip: "bg-gray-100 text-gray-700",
      items: ["VS Code", "IntelliJ", "GitHub Copilot", "Microsoft Office", "SharePoint", "Overleaf"]
    },
    {
      title: "Professional Skills",
      type: "chips",
      chip: "bg-pink-100 text-pink-700",
      items: ["Leadership", "Mentoring Junior Students", "Communication", "Presenting", "Teamwork", "Adaptability", "Organization", "Cross-Cultural Collaboration"]
    },
    {
      title: "Operating Systems",
      type: "chips",
      chip: "bg-green-100 text-green-700",
      items: ["Linux", "macOS", "Windows"]
    },
    {
      title: "Spoken Languages",
      type: "chips",
      chip: "bg-green-100 text-green-700",
      items: ["English (Fluent)", "Spanish (Fluent)"]
    }
  ];

  const sunLifeRoles = [
    {
      title: "Frontend Developer",
      dates: "Apr 2026 – Present",
      tags: ["React.js", "JavaScript/ES6", "HTML", "CSS/SCSS", "Bootstrap", "Webpack", "Jira", "Confluence", "Jenkins", "SonarQube"],
      bullets: [
        "Collaborated within a cross-functional agile team to develop client-facing web applications.",
        "Built and improved React single-page applications using React.js, JavaScript/ES6, HTML, CSS/SCSS, Bootstrap, and Webpack, improving usability and maintainability.",
        "Created unit tests to validate functionality and code quality, identifying defects early before QA handoff.",
        "Partnered with developers, business analysts, UX designers, and QA specialists throughout sprint planning, development, testing, and delivery."
      ]
    },
    {
      title: "AI Strategy and Transformation (Part-Time Contract)",
      dates: "Aug 2026 – Present",
      tags: ["Microsoft Copilot / Agent Builder", "Power Automate", "Data Analysis", "Governance & Risk", "Change Management"],
      bullets: [
        "Helped advance an enterprise-wide AI initiative that originated as an AI prioritization concept developed for a Sun Life Student Innovation Challenge. After attracting organizational interest, the concept evolved into a larger initiative focused on evaluating and scaling Microsoft Agent Builder adoption.",
        "Analyze Microsoft Agent Builder agents across Canadian operations, assessing use cases, reusability, scalability, and implementation feasibility to identify opportunities for enterprise adoption and inform strategic prioritization.",
        "Developed a centralized agent inventory and supporting Agent Builder agents, using Power Automate to streamline intake and analysis. Evaluated 693 agents across five usage categories and three maturity levels, and measured adoption at 29.2% among 706 license holders to inform enablement and deployment planning.",
        "Assessed potential PII exposure across enterprise agents, flagging 46.8% for further review and supporting risk evaluation, governance, and follow-up prioritization in collaboration with enterprise risk stakeholders."
      ]
    },
    {
      title: "API Software Engineering (Part-Time Contract)",
      dates: "May 2026 – Present",
      tags: ["Java 25", "Spring Boot 4", "REST APIs", "API Migration", "Architecture"],
      bullets: [
        "Contributed to enterprise API migrations to Java 25 and Spring Boot 4, modernizing backend services to improve maintainability and integration reliability.",
        "Supported API architecture and modernization work, collaborating on service improvements and maintaining consistency across backend systems."
      ]
    },
    {
      title: "Student Innovation Challenges",
      dates: "2026 – Present",
      tags: ["AI Innovation", "Strategic Prioritization", "Process Optimization", "Dashboard Design", "Team Collaboration"],
      bullets: [
        "Co-developed SunScore, an AI-powered initiative prioritization concept created during a Sun Life Student Innovation Challenge to assess project feasibility and scalability and help inform strategic investment and resource allocation.",
        "Currently collaborating on a Delivery Flow Visibility Dashboard to track work across the delivery pipeline, surface bottlenecks, and reduce wait times by improving visibility into progress and process efficiency."
      ]
    }
  ];

  const education = [
    {
      title: "University of Guelph",
      subtitle: "Bachelor of Computing in Computer Science · Business Minor · Co-op",
      location: "Guelph, ON",
      dates: "Aug 2024 – Apr 2029",
      bullets: [
        "GPA: 4.0 (90% average)",
        "University of Guelph Dean’s Honours List"
      ]
    },
    {
      title: "Universidad de Alcalá",
      subtitle: "International Exchange Term (through the University of Guelph)",
      location: "Madrid, Spain",
      dates: "Jan 2027 – Jun 2027",
      bullets: [
        "Studying abroad for a semester in Madrid, completing university coursework while building cross-cultural collaboration skills.",
        "Fluent in Spanish, allowing full participation in a bilingual academic environment."
      ]
    }
  ];

  const certifications = [
    {
      title: "React 18 / 19 Course 2025 – Learn React JS the Fast Way",
      subtitle: "Udemy · 13 Hours",
      dates: "May 2026",
      bullets: [
        "Completed hands-on training in modern React development, including components, JSX, props, state management, hooks, routing, and reusable UI design.",
        "Built interactive frontend applications using React 18/19 concepts and modern JavaScript practices."
      ]
    },
    {
      title: "AWS Cloud Certification",
      subtitle: "Amazon Web Services (AWS)",
      dates: "January 2027",
      bullets: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Emily Perez
          </div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">  
          {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-medium text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-4 lg:px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all text-sm lg:text-base"
          >
            Get in Touch
          </button>

          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-white border-t">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-3 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-5 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-8 space-y-8">
              {/* Project Thumbnail */}
                <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden">
                {selectedProject.thumbnail ? (
                  <img
                    src={selectedProject.thumbnail}
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />  
                ) : (
                  <div className="text-7xl">{selectedProject.emoji}</div>
                )}
              </div>


              {/* Overview */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedProject.readme.overview}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                  Features
                </h4>
                <ul className="space-y-3">
                  {selectedProject.readme.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.readme.techStack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accomplishments (TravelPal only) */}
              {selectedProject.readme.accomplishments && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                    Accomplishments
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.readme.accomplishments.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-green-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700 leading-relaxed flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Constraints (Travel Blog only) */}
              {selectedProject.readme.constraints && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                    Project Constraints
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.readme.constraints.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span className="text-gray-700 leading-relaxed flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learnings */}
              {selectedProject.readme.learnings && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                    {Array.isArray(selectedProject.readme.learnings) ? "Learning Outcomes" : "What We Learned"}
                  </h4>
                  {Array.isArray(selectedProject.readme.learnings) ? (
                    <ul className="space-y-3">
                      {selectedProject.readme.learnings.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-blue-600 font-bold mt-1">→</span>
                          <span className="text-gray-700 leading-relaxed flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{selectedProject.readme.learnings}</p>
                  )}
                </div>
              )}

              {/* Note (Travel Blog only) */}
              {selectedProject.readme.note && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed italic">{selectedProject.readme.note}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 hover:scale-105 transition-all"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Modal */}
      {skillsModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSkillsModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-5 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl font-bold text-white">Full Technical & Professional Skills</h3>
              <button
                onClick={() => setSkillsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-8 space-y-8">
              {skillSections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                    {section.title}
                  </h4>
                  {section.type === 'list' ? (
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-purple-600 font-bold mt-1">•</span>
                          <span className="text-gray-700 leading-relaxed flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item, i) => (
                        <span key={i} className={`px-4 py-2 ${section.chip} rounded-full text-sm font-medium`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => setSkillsModalOpen(false)}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-medium text-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
              Open to learning and new experiences
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I’m Emily.
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome to My Personal Portfolio.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
             I’m a Computer Science student with a Business minor who enjoys learning, exploring new ideas, and taking on different challenges. I’m open to a wide range of experiences and opportunities to grow, contribute, and discover new interests. Here you’ll find a little about what I’ve learned, built, and been involved in so far.
            </p>


            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/emilyperezhd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all shadow-md">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/emily-perez-837b33262/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all shadow-md">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:emily.perez.hd@gmail.com" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all shadow-md">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center min-h-96">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute top-0 right-0 w-48 lg:w-64 h-64 lg:h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl shadow-2xl transform rotate-6 transition-transform hover:rotate-12" />
              <div className="absolute bottom-0 left-0 w-48 lg:w-64 h-64 lg:h-80 bg-gradient-to-br from-pink-400 to-orange-400 rounded-3xl shadow-2xl transform -rotate-6 transition-transform hover:-rotate-12" />
              <div className="relative z-10 w-64 lg:w-72 h-80 lg:h-96 bg-white rounded-3xl shadow-2xl p-6 lg:p-8 flex flex-col items-center justify-center gap-6 mx-auto">
                <div className="w-full h-28 lg:h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center text-5xl lg:text-6xl">
                  💻
                </div>
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">My Portfolio</h3>
                  <p className="text-sm lg:text-base text-gray-600">Experience • Projects • Skills</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <div className="w-3 h-3 bg-pink-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="space-y-6">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              I’m Emily, a Computer Science student with a curiosity about how things work and how ideas can be turned into practical solutions. I genuinely enjoy learning, whether that means exploring a new technology, taking on an unfamiliar challenge, or gaining a different perspective from the people around me.
            </p>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              I believe every experience has something to teach you. I try to approach new opportunities with an open mind, a willingness to ask questions, and the motivation to keep improving. I’m open to exploring different fields and roles, and I enjoy finding ways to contribute while learning from the people I work with.
            </p>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              I value collaboration, clear communication, and bringing a positive attitude to the teams and communities I’m part of. I’m fluent in English and Spanish, and I enjoy connecting with people from different backgrounds and learning from their experiences.
            </p>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Outside the classroom, I’ve had opportunities to explore software development, AI, business, student leadership, and collaborative projects. I’m excited to keep building on those experiences, try new things, and see where continued learning takes me.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setSkillsModalOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                View Full Tech Skills
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all"
              >
                See My Experience
              </button>
            </div>
                          
              <div className="flex gap-6 lg:gap-8 pt-4 flex-wrap justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600">4.0</div>
                  <div className="text-gray-600 text-xs lg:text-sm">University GPA</div>
                </div>
                <div className="w-px bg-gray-300 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600">2</div>
                  <div className="text-gray-600 text-xs lg:text-sm">Languages</div>
                </div>
                <div className="w-px bg-gray-300 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600">Co-op</div>
                  <div className="text-gray-600 text-xs lg:text-sm">Ready to contribute</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">{skill.title}</h4>
                    <p className="text-xs lg:text-sm text-gray-600">{skill.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-lg sm:text-xl text-gray-600">Where I’ve applied my skills</p>
          </div>

          <div className="space-y-8">
            {/* Sun Life */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Sun Life
                </h3>
                <span className="text-sm text-gray-500">
                  Apr 2026 – Present
                </span>
              </div>
              <p className="text-purple-600 font-medium mb-6">
                Co-op Student · Kitchener, ON
              </p>

              <div className="space-y-8">
                {sunLifeRoles.map((role, idx) => (
                  <div key={idx} className="border-l-4 border-purple-200 pl-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-900">
                        {role.title}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {role.dates}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {role.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {role.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-purple-600 font-bold mt-1">•</span>
                          <span className="text-gray-700 leading-relaxed flex-1">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Helios */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Shopify Developer
                </h3>
                <span className="text-sm text-gray-500">
                  Apr 2025 – Aug 2025
                </span>
              </div>
              <p className="text-purple-600 font-medium mb-4">
                Helios Technology Solutions Inc. · Cambridge, ON
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Collaborated with clients to launch and optimize Shopify stores, including setup, theme customization, and tailored ecommerce workflows.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Deployed and configured POS systems and hardware (Lightspeed, Square, QuickBooks), ensuring seamless in-store and online integration.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Managed product data, inventory, and SEO across multi-location stores with a focus on accuracy and scalability.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Delivered hands-on training and technical support to improve client operations and customer experience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Designed a Python + MongoDB prototype backup system using the Shopify Admin API and webhooks, reducing migration-related errors by ~40%.
                  </span>
                </li>
              </ul>
            </div>

            {/* SOCIS */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Vice President of Communications
                </h3>
                <span className="text-sm text-gray-500">
                  May 2025 – June 2026
                </span>
              </div>
              <p className="text-purple-600 font-medium mb-4">
                Society of Computing & Information Science (SOCIS)
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Elected to support student–faculty engagement through clear, inclusive, and transparent communication.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Led communications and content strategy across social media, newsletters, announcements, and event promotion.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Collaborated with executive members to plan and coordinate events throughout the academic year, supporting logistics and engagement for events with 100+ attendees.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Participated in networking and professional development events, building connections across diverse fields and expanding industry knowledge.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600">Some of my recent work</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className={`w-16 h-16 lg:w-20 lg:h-20 ${project.color} rounded-2xl flex items-center justify-center text-3xl lg:text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {project.emoji}
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-lg sm:text-xl text-gray-600">Where I’m learning and growing</p>
          </div>

          <div className="space-y-8">
            {education.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {item.dates}
                  </span>
                </div>
                <p className="text-purple-600 font-medium mb-4">
                  {item.subtitle} · {item.location}
                </p>
                <ul className="space-y-3">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
          </div>

          <div className="space-y-8">
            {certifications.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {item.dates}
                  </span>
                </div>
                <p className={`text-purple-600 font-medium ${item.bullets.length ? 'mb-4' : ''}`}>
                  {item.subtitle}
                </p>
                {item.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span className="text-gray-700 leading-relaxed flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600">Feel free to reach out anytime.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                    <p className="text-gray-600 leading-relaxed">
                      You can reach me through any of the platforms below. I’m always happy to chat about my experience,
                      interests, or potential opportunities.
                    </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:emily.perez.hd@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-sm truncate">emily.perez.hd@gmail.com</div>
                    </div>
                  </a>

                  <a href="https://github.com/emilyperezhd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900">GitHub</div>
                      <div className="text-sm truncate">@emilyperezhd</div>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/emily-perez-837b33262/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900">LinkedIn</div>
                      <div className="text-sm truncate">Emily Perez</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 lg:p-8 text-white flex flex-col justify-center shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Let’s Connect</h3>
                  <p className="mb-6 opacity-90">
                    Whether you’re a recruiter, fellow student, or just browsing, feel free to reach out.
                  </p>
                  <button
                    onClick={() => window.location.href = "mailto:emily.perez.hd@gmail.com"}
                    className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Send Me an Email
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}