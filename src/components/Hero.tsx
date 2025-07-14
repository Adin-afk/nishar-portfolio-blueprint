import React from 'react';
import { ChevronDown } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import heroImage from '../assets/hero-professional.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background to-secondary">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Aditya <span className="gradient-text">Nishar</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              <TypingAnimation
                texts={['Frontend Developer', 'Python Developer', 'Prompt Engineer']}
                className="typing-text"
                speed={120}
                deleteSpeed={80}
                pauseDuration={2000}
              />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
              Turning Imagination into Codes
            </p>
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="hero-button inline-flex items-center gap-2"
          >
            View My Work
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        
        {/* Right Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-2xl"></div>
            <img 
              src={heroImage}
              alt="Aditya Nishar - Professional Developer"
              className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;