
import React from 'react';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Education from '@/components/portfolio/Education';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Resume from '@/components/portfolio/Resume';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
};

export default Index;
