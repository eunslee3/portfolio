'use client'

import React, { useState } from 'react'
import { ExternalLinkIcon, GithubIcon, XIcon } from 'lucide-react'

interface Project {
  title: string;
  categories: string[];
  image: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const projects = [
    {
      title: 'Beachhead',
      categories: ['AI Development', 'Web Development'],
      image:
        'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
              description:
          'Beachhead is an AI-powered platform that helps indie hackers and solo founders validate SaaS ideas before writing a single line of code. It combines full-stack development with AI-driven scoring to evaluate product ideas across dimensions like market demand, monetization potential, and user pain. By pulling real-world signals from Reddit discussions and Google Trends.\n\nUnder the hood, it leverages OpenAI, Claude, Supabase, a custom scraper, and a robust scoring engine built to reflect real startup viability.',
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'OpenAI', 'Claude', 'Puppeteer'],
      liveLink: 'https://beachhead-ai.com/',
    },
    {
      title: 'Tai',
      categories: ['Mobile App Development', 'AI Development'],
      image:
        'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'Tai is an AI-powered fitness trainer that creates personalized strength training plans and adapts them based on user feedback, performance, and goals, all through a simple chat-based interface. It remembers each user’s training block, weekly progression, and logged workouts to dynamically adjust programming using intelligent logic and natural language prompts. \n\nBuilt with React Native, OpenAI, and a structured memory system, Tai acts like a real coach by checking in on how training felt, adjusting volume or intensity, and guiding users through progressive overload with intention. The MVP focuses on conversational clarity, adaptive planning, and minimal UI friction to prove that a smarter coach can exist without a complex app.',
      technologies: ['React Native', 'OpenAI', 'Expo', 'NestJS', 'Neon Postgres', 'Prisma ORM'],
      githubLink: 'https://github.com/eunslee3/tai-client',
    },
    {
      title: 'Repair Daddy HVAC',
      categories: ['Web Development'],
      image:
        '/hvac.webp',
      description:
        'A responsive marketing site for a local HVAC business, featuring a modern design, clear service highlights, and a fully functional contact form with reCAPTCHA protection. Built to establish trust and drive inquiries, the site is optimized for clarity, speed, and mobile responsiveness, with on-page SEO best practices applied to improve search visibility and attract local traffic.',
      technologies: ['Next.js', 'Tailwind CSS', 'Nodemailer', 'Recaptcha'],
      liveLink: 'https://repairdaddyhvac.com/',
    },
    {
      title: 'Happs',
      categories: ['Mobile App Development'],
      image:
        '/Happs.svg',
      description:
        "Happs is a mobile app that connects people to local experiences, events, and businesses through community-driven posts. Users can discover what's happening around them, share events or activities, and engage with their town through likes, collections, challenges, and achievements. Designed for both individuals and local businesses, Happs promotes real-world connection through a feed of photos, videos, and verified posts. \n\nBuilt with React Native and a custom backend, the app balances social interaction with community impact, helping users explore their area with purpose and spontaneity.",
      technologies: ['React Native', 'AWS S3', 'AWS Lambda', 'NestJS', 'Neon Postgres', 'Prisma ORM',],
      githubLink: 'https://github.com/eunslee3/happs-client',
    }
  ]
  const categories = [
    'All',
    ...new Set(projects.flatMap((project) => project.categories)),
  ]
  
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter))

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    // Add overflow hidden to body when sidebar is open
    document.body.style.overflow = 'hidden'
  }
  const closeSidebar = () => {
    setSelectedProject(null)
    // Restore body overflow when sidebar is closed
    document.body.style.overflow = 'auto'
  }
  return (
    <section id="projects" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems and showcase different skills.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${activeFilter === category ? 'bg-purple-600 text-white' : 'bg-slate-800 text-white/70 hover:bg-slate-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-slate-700 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs px-3 py-1 bg-slate-700 rounded-full text-white/80">
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project Details Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${selectedProject ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {selectedProject && (
          <div className="h-full flex flex-col">
            <div className="p-6 flex justify-between items-center border-b border-slate-700">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={closeSidebar}
                className="p-2 rounded-full hover:bg-slate-700 transition-colors"
              >
                <XIcon size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Category
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-slate-700 rounded-full text-white/80"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Description
                  </h3>
                  <p className="text-white/80 whitespace-pre-line">{selectedProject.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-slate-700 rounded-full text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-4">
                    Links
                  </h3>
                  <div className="flex gap-4">
                    {selectedProject.liveLink && (
                      <a
                      href={selectedProject.liveLink}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon size={18} /> Link
                    </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon size={18} /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Overlay when sidebar is open */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </section>
  )
}
