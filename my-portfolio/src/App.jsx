import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Palette, Zap, Users, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [skillsModalOpen, setSkillsModalOpen] = useState(false);

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
    { icon: Code2, title: "Full-Stack Web Development", desc: "React, Next.js, TypeScript, Tailwind" },
    { icon: Zap, title: "APIs & Integrations", desc: "REST APIs, Shopify Admin API, Webhooks" },
    { icon: Users, title: "Communication & Leadership", desc: "VP Communications, presenting, teamwork" },
    { icon: Palette, title: "Data & Analytics", desc: "Excel, PowerBI, data cleaning & organization" },
    { icon: Code2, title: "Cloud (AWS — In Progress)", desc: "AWS Cloud certification coursework" },
    { icon: Zap, title: "Tools & Workflow", desc: "Git/GitHub, Docker, VS Code, CI habits" }
  ];


  const fullTechSkills = {
    languages: ["Java", "C", "Python", "JavaScript/TypeScript", "HTML", "CSS", "SQL"],
    softwareDevelopment: [
      "AWS Certificate in progress",
      "Assembly language",
      "Object-Oriented Programming",
      "File I/O",
      "Data Structures",
      "Memory Management",
      "Debugging",
      "API Integration",
      "UX Design"
    ],
    frameworksTools: [
      "Microsoft Office",
      "PowerBI",
      "Next.js",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "MongoDB",
      "Shopify Admin API",
      "Git",
      "IntelliJ",
      "VS Code",
      "Copilot"
    ],
    collaborationWorkflow: ["GitHub", "Confluence", "SharePoint", "Overleaf", "Docker"],
    operatingSystems: ["Linux", "macOS", "Windows"]
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Emily Perez
          </div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">  
          {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
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
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
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
              <h3 className="text-2xl font-bold text-white">Full Technical Skills</h3>
              <button
                onClick={() => setSkillsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-8 space-y-8">
              {/* Languages */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {fullTechSkills.languages.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software Dev */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                  Software Development
                </h4>
                <ul className="space-y-3">
                  {fullTechSkills.softwareDevelopment.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frameworks / Tools */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                  Frameworks & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {fullTechSkills.frameworksTools.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collaboration */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                  Collaboration & Workflow
                </h4>
                <div className="flex flex-wrap gap-2">
                  {fullTechSkills.collaborationWorkflow.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* OS */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                  Operating Systems
                </h4>
                <div className="flex flex-wrap gap-2">
                  {fullTechSkills.operatingSystems.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

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
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I’m Emily.
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome to My Personal Portfolio.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
             Computer Science (Co-op) student at the University of Guelph with a Business minor. Here you’ll find an overview of my experience, projects, and technical skill set.
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
              <a href="mailto:emily.perez.hd@example.com" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all shadow-md">
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
              I’m Emily, a Computer Science student who enjoys learning, working with people,
              and understanding how things fit together. I’m adaptable, pick up new tools quickly,
              and appreciate environments where communication and collaboration are encouraged.
            </p>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              I’m someone who values clear conversations, asking questions, and staying organized
              when working with others. I’m comfortable communicating with people from different
              backgrounds and explaining ideas in a way that makes sense.
            </p>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              I also care a lot about my academic work and take pride in doing well in school.
              I’m fluent in English and Spanish, which has helped me connect with others and
              collaborate more effectively in different settings.
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

      {/* Experience Section */}
        <section id="experience" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
              <p className="text-lg sm:text-xl text-gray-600">Where I’ve applied my skills</p>
            </div>

            <div className="space-y-8">
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
                      Deployed and configured POS systems and hardware, ensuring seamless in-store and online integration.
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
                      Designed a Python + MongoDB prototype backup system using the Shopify Admin API, reducing migration-related errors by ~40%.
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
                  May 2025 – Present
                </span>
              </div>
              <p className="text-purple-600 font-medium mb-4">
                Society of Computing & Information Science (SOCIS)
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Elected to lead student–faculty engagement through clear, inclusive, and transparent communication.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Manage content strategy, event promotion, and community updates across multiple platforms.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed flex-1">
                    Collaborate with executive team members to foster a connected and supportive academic community.
                  </span>
                </li>
              </ul>
            </div>
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
                  <a href="mailto:emily.perez@example.com" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
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

                  <a href="https://linkedin.com/in/emilyperezhd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
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