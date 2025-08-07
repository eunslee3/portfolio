'use client';

import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '/modern-ecommerce-interface.png',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      category: 'Web Development',
      image: '/task-management-dashboard.png',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Weather Dashboard',
      category: 'API Integration',
      image: '/weather-dashboard.png',
      description: 'A weather application that provides real-time forecasts and historical data visualization.',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Social Media Analytics',
      category: 'Data Visualization',
      image: '/analytics-dashboard.png',
      description: 'Dashboard for analyzing social media performance with interactive charts and reports.',
      technologies: ['React', 'D3.js', 'Node.js', 'Social Media APIs'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile App',
      image: '/fitness-tracking-app.png',
      description: 'Mobile application for tracking workouts, nutrition, and fitness progress.',
      technologies: ['React Native', 'Redux', 'Firebase', 'Health APIs'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'AI Image Generator',
      category: 'Machine Learning',
      image: '/ai-image-generation-interface.png',
      description: 'Web application that generates images using AI based on text descriptions.',
      technologies: ['Python', 'TensorFlow', 'React', 'Flask'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-900">
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
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800 text-white/70 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors"
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      className="bg-slate-700 hover:bg-slate-600 p-2 rounded-full transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-slate-700 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
