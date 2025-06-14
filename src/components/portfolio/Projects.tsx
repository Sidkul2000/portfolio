
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
        {
      title: "TuneTether: Music-Based User Matchmaking",
      description: "Music-based user matchmaking system that connects individuals through shared music preferences. Analyzes listening habits to provide personalized recommendations and identify users with similar tastes.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
      category: "fullstack",
      technologies: ["Python", "Pyspark", "OpenAI", "NodeJS", "FastAPI"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sidkul2000/TuneTether",
      featured: true
    },
    {
      title: "Interactive Geospatial Visualization of Airbnb London Dataset",
      description: "Analyzed prices and guest review scores of Airbnb listings across London neighborhoods. Visualized which neighborhoods are preferable for renting based on guest review scores and pricing patterns.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      category: "data-science",
      technologies: ["Python", "Seaborn", "Matplotlib", "Altair", "Plotly"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sidkul2000/GeospatialVisualization",
      featured: true
    },
    // {
    //   title: "Tech Blog",
    //   description: "Full-stack blog application created using Flask backend with SQLAlchemy for database operations. Features include post management, admin functionality, and user contact system with responsive Bootstrap frontend.",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    //   category: "fullstack",
    //   technologies: ["Flask", "SQLAlchemy", "Python", "Heroku", "PostgreSQL", "Bootstrap"],
    //   liveUrl: "https://techingenious.herokuapp.com/",
    //   githubUrl: "#",
    //   featured: false
    // },
    {
      title: "Face Recognition System",
      description: "Advanced face recognition system using VGG16 model with 93.4% accuracy. Employed Cascade Classifier for facial feature extraction and real-time face recognition via webcam using OpenCV.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib", "VGG16"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sidkul2000/CNN-Projects/blob/master/Face%20Recognition%20(Transfer%20Learning)/FaceRecognition.ipynb",
      featured: true
    },
    {
      title: "Car Detection using YOLO",
      description: "Real-time car detection system using pre-trained You Only Look Once (YOLO) model. The system detects cars in images and videos, drawing accurate bounding boxes around each detected vehicle.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["Python", "scikit-learn", "numpy", "pandas", "Keras", "YOLOv4"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sidkul2000/Coursera-Assignments/blob/master/DeepLearning.ai_Course%20-%204%20-%20Convolutional%20Neural%20Networks/Autonomous_driving_application_Car_detection_v3a.ipynb",
      featured: false
    },
    {
      title: "Demand and Revenue Forecasting",
      description: "Sponsored by ArrayPointer Pvt Ltd. Analyzed live data from 80+ food industry businesses, creating a boosting algorithm for revenue forecasting with 14% MAPE and 86% precision using FastAPI deployment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "data-science",
      technologies: ["Python", "Numpy", "Pandas", "Sklearn", "Seaborn", "Matplotlib", "Tableau"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    // {
    //   title: "Image Generator with GAN",
    //   description: "Developed an image generator based on Generative Adversarial Network (GAN) to generate realistic fake images from real datasets. Tested on human-face database with PCA-based loss calculation.",
    //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    //   category: "ai",
    //   technologies: ["TensorFlow", "Python", "numpy", "Keras", "pandas"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false
    // },
    {
      title: "Jazzify: AI-driven Jazz Composition",
      description: "LSTM-based music composition system that synthesizes and predicts jazz music sequences. Trained on 78 jazz pieces, achieving 94% training accuracy over 100 epochs while maintaining authentic jazz harmonics.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["TensorFlow", "Keras", "RNN", "Music21", "LSTM"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sidkul2000/Jazzify",
      featured: true
    },
    {
      title: "StackOverflow Assistant Bot",
      description: "Conversational chatbot for coding-related questions with 80% test accuracy. Preprocessed 400,000 StackOverflow sentences using TF-IDF features and built an intent recognizer for dialogue simulation.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["TfidfVectorizer", "Starspace Embeddings", "ChatterBot"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sidkul2000/Stackoverflow_bot",
      featured: false
    },
    {
      title: "Art Generation with Neural Style Transfer",
      description: "Neural Style Transfer implementation for generating artistic images using VGG19 pre-trained model. The optimization algorithm updates pixel values to blend content and style from different images.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["Python", "TensorFlow", "SciPy", "Numpy", "Pandas", "Matplotlib", "VGG19"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sidkul2000/Coursera-Assignments/blob/master/DeepLearning.ai_Course%20-%204%20-%20Convolutional%20Neural%20Networks/Art_Generation_with_Neural_Style_Transfer_v3a.ipynb",
      featured: false
    },
    {
      title: "Roomio: Roommate Search Application",
      description: "Comprehensive roommate search application with MySQL backend and Flask frontend. Features 13 modules including advanced search, user sessions, registration, and interest posting with 20+ SQL queries.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      category: "fullstack",
      technologies: ["MySQL", "Flask", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sidkul2000/PDSProject/",
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Showcasing my best work and technical expertise
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.value)}
                className="hover-scale"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                hoveredProject === index ? 'scale-105' : ''
              } ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    
                    {project.githubUrl !== "#" && (
                      <Button size="sm" variant="secondary" className="hover-scale" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-2 right-2 bg-primary">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;