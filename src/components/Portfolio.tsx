
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Sistema de Gestión Hospitalaria",
    description: "Plataforma integral para administración de pacientes, citas médicas, historias clínicas y gestión de recursos hospitalarios.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Plataforma de Análisis de Datos",
    description: "Herramienta de business intelligence para el procesamiento y visualización de grandes volúmenes de datos empresariales.",
    technologies: ["Python", "Django", "D3.js", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Sistema de Seguridad IoT",
    description: "Solución de monitoreo y seguridad para dispositivos IoT, con detección de anomalías y gestión centralizada.",
    technologies: ["Node.js", "MongoDB", "MQTT", "React Native"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.fade-in-section');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll('.fade-in-section');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title mb-16">Portafolio</h2>
        
        <div className="mb-12 max-w-2xl mx-auto text-center fade-in-section">
          <p className="text-muted-foreground">
            Una selección de proyectos que destacan mi experiencia en desarrollo de software,
            arquitectura de sistemas y auditoría informática.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`fade-in-section flex flex-col lg:flex-row ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/5 text-xs font-medium rounded-md border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="group border-primary/20 hover:bg-primary/5"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <span>Ver Proyecto</span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="ml-1 transition-transform group-hover:translate-x-1" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <Button 
            variant="outline" 
            className="border-primary/20 hover:bg-primary/5"
            onClick={() => window.open('https://github.com/emartinez', '_blank')}
          >
            Ver más proyectos en GitHub
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="ml-2" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
