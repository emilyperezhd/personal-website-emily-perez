import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Palette, Zap, Users, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  };

  const projects = [
    {
      title: "My Study App",
      description: "Personal study assistant that transforms class notes into quizzes, study guides, and practice exams",
      fullDescription: "An AI-powered study assistant tool that takes information straight from class notes and presentations and provides comprehensive study tools. Features include automated quiz generation, personalized study guides, practice midterms, note-taking options, and more. Built to help students study more effectively and efficiently.",
      tech: ["JavaScript", "React", "AI/ML"],
      emoji: "📚",
      color: "bg-blue-500",
      github: "https://github.com/emilyperezhd/my-study-app",
      liveUrl: "https://my-study-tool.vercel.app",
      screenshot: "https://i.imgur.com/placeholder1.jpg" // Using placeholder - you can replace with actual screenshot URL
    },
    {
      title: "TravelPal",
      description: "Full-stack Next.js app that helps travelers craft sustainable, personalized itineraries with Google Gemini AI",
      fullDescription: "We teamed up to build TravelPal, a full-stack Next.js & Convex app that helps travellers craft sustainable, personalized itineraries with the power of Google Gemini. Features eco-friendly trip planning, AI-powered recommendations, and interactive chatbot for personalized travel experiences. Winner project at GDS Hacks 2025.",
      tech: ["TypeScript", "Next.js", "Convex", "Google Gemini"],
      emoji: "✈️",
      color: "bg-green-500",
      github: "https://github.com/emilyperezhd/gdschacks25",
      liveUrl: "https://travelpal-taupe.vercel.app",
      screenshot: "https://i.imgur.com/placeholder2.jpg" // Using placeholder - you can replace with actual screenshot URL
    },
    {
      title: "Travel Blog",
      description: "Personal travel blog showcasing destinations and memorable experiences, built with pure HTML & CSS",
      fullDescription: "A personal travel blog built with pure HTML and CSS for a web development course (100% grade). Showcases destinations I've visited and memorable travel experiences across different continents. Features a clean, responsive design with interactive map and organized travel stories by region.",
      tech: ["HTML", "CSS"],
      emoji: "🌍",
      color: "bg-purple-500",
      github: "https://github.com/emilyperezhd/travel-blog-website",
      liveUrl: "https://travel-blog-website-emily-perez.vercel.app/home.html",
      screenshot: "https://i.imgur.com/placeholder3.jpg" // Using placeholder - you can replace with actual screenshot URL
    }
  ];

  const skills = [
    { icon: Code2, title: "Frontend Development", desc: "React, Vue, Next.js" },
    { icon: Zap, title: "Backend & APIs", desc: "Node.js, Python, GraphQL" },
    { icon: Palette, title: "UI/UX Design", desc: "Figma, Design Systems" },
    { icon: Users, title: "Collaboration", desc: "Agile, Git, CI/CD" }
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
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
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
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Screenshot */}
              <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center text-6xl">
                {selectedProject.emoji}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">About This Project</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
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
              Build amazing
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                digital experiences
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web applications 
              that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all">
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/emilyperezhd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all shadow-md">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/emilyperezhd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all shadow-md">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:emily.perez@example.com" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-lg transition-all shadow-md">
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
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Let's Create</h3>
                  <p className="text-sm lg:text-base text-gray-600">Something Amazing Together</p>
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

      {/* About Section */}
      <section id="about" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg sm:text-xl text-gray-600">What I bring to the table</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Creating digital solutions that matter
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                I'm a full-stack developer with a passion for building elegant, user-friendly applications. 
                With expertise in modern web technologies, I transform ideas into reality.
              </p>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                My approach combines technical excellence with creative problem-solving, ensuring 
                every project is both functional and beautiful.
              </p>
              <div className="flex gap-6 lg:gap-8 pt-4 flex-wrap justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600">4+</div>
                  <div className="text-gray-600 text-xs lg:text-sm">Years Experience</div>
                </div>
                <div className="w-px bg-gray-300 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600 text-xs lg:text-sm">Projects Completed</div>
                </div>
                <div className="w-px bg-gray-300 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600">20+</div>
                  <div className="text-gray-600 text-xs lg:text-sm">Happy Clients</div>
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

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-lg sm:text-xl text-gray-600">Have a project in mind? I'd love to hear about it.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:emily.perez@example.com" className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-sm truncate">emily.perez@example.com</div>
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
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Ready to start?</h3>
                <p className="mb-6 opacity-90">
                  Let's discuss your project and see how I can help bring your vision to life.
                </p>
                <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}