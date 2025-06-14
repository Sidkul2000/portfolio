
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Master of Computer Science",
      school: "New York University",
      year: "2023-2025",
      gpa: "3.68/4.0",
      achievements: ["Algorithms", "Big Data", "NLP Teaching Assistant", "AI/ML Focus"],
      progress: 100
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      school: "Pune University",
      year: "2019-2023",
      gpa: "9.38/10",
      achievements: ["Honors in AI & ML", "General Secretary of Student Club"],
      progress: 100
    }
  ];

  const certifications = [
    { name: "Google Cloud Certification", issuer: "Google", year: "2022", progress: 100 },
    { name: "5 Course Specialization in Deep Learning", issuer: "Deeplearning.ai", year: "2021", progress: 100 },
    { name: "Building Transformer Based NLP Applications", issuer: "Nvidia", year: "2021", progress: 100 },
    { name: "Natural Language Processing", issuer: "National Research University", year: "2021", progress: 100 },
    { name: "Python Data Structures", issuer: "University of Michigan", year: "2019", progress: 100 },
    

  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">Education & Learning</h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning and academic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={edu.degree}
              className={`hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{edu.degree}</CardTitle>
                <p className="text-primary font-semibold">{edu.school}</p>
                <p className="text-muted-foreground">{edu.year}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">GPA</span>
                    <span className="text-primary font-semibold">{edu.gpa}</span>
                  </div>
                  <Progress value={isVisible ? edu.progress : 0} className="transition-all duration-1000 delay-500" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <Badge key={achievement} variant="secondary" className="animate-fade-in">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name}
                className={`text-center hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-sm text-primary mb-4">{cert.year}</p>
                  <Progress value={isVisible ? cert.progress : 0} className="transition-all duration-1000" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
