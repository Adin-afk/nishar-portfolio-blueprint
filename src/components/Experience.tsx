import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      type: 'education',
      title: 'Computer Science Engineering',
      organization: 'W.I.T Solapur',
      period: '2024 - 2028',
      location: 'Solapur, Maharashtra',
      description: 'Pursuing Bachelor\'s degree in Computer Science Engineering with focus on software development, algorithms, and modern programming paradigms.',
      current: true
    },
    {
      type: 'experience',
      title: 'Software Development Intern',
      organization: 'Mirai School of Technology',
      period: '6 weeks',
      location: 'Technology Hub',
      description: 'Gained hands-on experience in full-stack development, worked on real-world projects, and collaborated with experienced developers to build scalable applications.',
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Education & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="glow-card ml-6 bg-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-semibold">
                      {item.organization}
                    </p>
                  </div>
                  
                  {item.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mt-2 sm:mt-0">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;