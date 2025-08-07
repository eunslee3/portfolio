'use client';

import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

export function HeroSection() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Software Engineer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 mb-4 bg-purple-600/20 text-purple-400 rounded-full">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {'Hi, I\'m '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
              Sam Lee
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              |
            </span>
          </h2>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl">
            I'm a software engineer focused on turning thoughtful design into meaningful tools.
            My work spans education, small business, and community-driven platforms, all built with clean code and real users in mind.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              className="bg-purple-600 hover:bg-purple-700 transition-all px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:gap-3"
              onClick={() => scrollToSection('projects')}
            >
              View Projects <ArrowDown size={18} />
            </button>
            <button
              className="bg-transparent border border-white/20 hover:border-white/40 transition-all px-6 py-3 rounded-md font-medium"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
          
          <div className="flex gap-4 mt-10">
            <a target="_blank" href="https://github.com/eunslee3" className="text-white/60 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/sam-lee-0332b3194/" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
}
