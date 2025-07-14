import React from 'react';
import TypingAnimation from './TypingAnimation';

const Skills = () => {
  const skills = ['C', 'Python', 'HTML', 'CSS', 'JavaScript'];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
        </div>
        
        <div className="text-center">
          <div className="glow-card inline-block p-8 bg-card/50 backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-muted-foreground">{"<"}</span>
              <TypingAnimation
                texts={skills}
                className="typing-text"
                speed={150}
                deleteSpeed={100}
                pauseDuration={1500}
              />
              <span className="text-muted-foreground">{" />"}</span>
            </div>
            <p className="text-muted-foreground text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={skill} className="glow-card text-center p-6 bg-card">
              <div className="text-2xl font-mono font-bold text-primary mb-2">
                {skill}
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${85 + (index * 3)}%`,
                    animation: `slideIn 1.5s ease-out ${index * 0.2}s both`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;