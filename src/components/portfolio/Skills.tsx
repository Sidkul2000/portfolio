
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 95, years: 5 },
        { name: "LLMs (GPT-2, T5, LLAMA-2)", level: 92, years: 2 },
        { name: "TensorFlow/Keras", level: 90, years: 3 },
        { name: "PyTorch", level: 85, years: 2 }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS (Bedrock, Lambda, S3, SQS)", level: 90, years: 2 },
        { name: "Terraform", level: 85, years: 1 },
        { name: "Docker", level: 82, years: 2 },
        { name: "Kubernetes/EKS", level: 80, years: 1 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "Next.js/React", level: 88, years: 3 },
        { name: "TypeScript", level: 85, years: 2 },
        { name: "Node.js", level: 85, years: 3 },
        { name: "FastAPI", level: 82, years: 2 }
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Data Analysis (Pandas, NumPy)", level: 92, years: 4 },
        { name: "Visualization (Matplotlib, Seaborn, Plotly)", level: 90, years: 4 },
        { name: "Statistical Analysis", level: 88, years: 3 },
        { name: "Time Series Forecasting", level: 85, years: 2 }
      ]
    }
  ];

  const certifications = [
    "Machine Learning Specialization",
    "Deep Learning Specialization",
    "Natural Language Processing",
    "Data Science Professional"
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Technologies I work with and certifications I've earned
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className={`hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                      style={{ transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{skill.years}y</span>
                          <span className="text-sm font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="transition-all duration-1000"
                        style={{ transitionDelay: `${categoryIndex * 200 + skillIndex * 100 + 300}ms` }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-8">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={cert}
                variant="outline" 
                className={`text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Companies Worked</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;