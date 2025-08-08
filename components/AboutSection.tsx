'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Code, Server, Paintbrush, Database, Brain } from 'lucide-react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Next.js', level: 85 },
    { name: 'SQL', level: 50 },
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks and libraries.',
    },
    {
      icon: <Server className="h-8 w-8 text-teal-500" />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with scalable architecture and efficient APIs.',
    },
    {
      icon: <Brain className="h-8 w-8 text-amber-500" />,
      title: 'AI Development',
      description: 'Using AI APIs and custom models to drive dynamic, context-aware interfaces.',
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: 'Database Design',
      description: 'Structuring efficient and scalable database solutions for optimal data management.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-white/70 mb-4">
              {"I'm a self-taught software engineer with a track record of building real-world solutions that serve educators, small businesses, and communities. From streamlining access for 7,000+ educators to launching tools that help local businesses grow their presence, I focus on clean, user-centered development that makes a difference."}
            </p>
            <p className="text-white/70 mb-4">
              My path into tech was unconventional, shaped by grit and curiosity. Since breaking into the field, I've worked across the stack, led impactful projects, and kept growing by building.
            </p>
            <p className="text-white/70 mb-6">
              {"When I'm not coding, I’m usually cooking or chasing down ideas that won't leave me alone."}
            </p>
            <div className="grid grid-cols-2 gap-4 text-white/70">
              <div>
                <p><strong>Name:</strong> Sam Lee</p>
                <p><strong>Experience:</strong> 2+ years</p>
              </div>
              <div>
                <p><strong>Email:</strong> lee.eunseong7856@gmail.com</p>
                <p><strong>Location:</strong> Lawrence, KS</p>
              </div>
            </div>
          </div>

          <div ref={skillsRef}>
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-lg hover:translate-y-[-5px] transition-transform duration-300 border border-slate-700 hover:border-purple-500/50"
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
