import React from 'react';
import { Code2, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Aditya Nishar, a passionate Computer Science Engineering student at 
              <span className="text-primary font-semibold"> W.I.T Solapur (2024–2028)</span>. 
              My journey in technology began with curiosity and has evolved into a deep passion 
              for creating innovative solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              During my 6-week internship at <span className="text-primary font-semibold">Mirai School of Technology</span>, 
              I gained hands-on experience in real-world development projects. I specialize in 
              building clean, responsive frontend UIs and powerful Python applications that solve 
              complex problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest technologies, 
              contributing to open-source projects, or brainstorming the next big idea 
              that could make a difference.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="glow-card flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">CSE at W.I.T Solapur</p>
                <p className="text-sm text-primary">2024 - 2028</p>
              </div>
            </div>
            
            <div className="glow-card flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">Mirai School of Technology</p>
                <p className="text-sm text-primary">6-week Internship</p>
              </div>
            </div>
            
            <div className="glow-card flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">Frontend & Python Development</p>
                <p className="text-sm text-primary">Clean Code Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;