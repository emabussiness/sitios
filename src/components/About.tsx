
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title mb-16">Sobre Mí</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/5 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop"
                alt="Emanuel Martinez"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>
          
          <div>
            <div className="fade-in-section">
              <h3 className="text-2xl font-bold mb-4">Profesional en Tecnologías de la Información</h3>
              <p className="text-muted-foreground mb-6">
                Con más de 8 años de experiencia en el sector tecnológico, me especializo en el análisis, 
                diseño e implementación de sistemas informáticos robustos y escalables.
              </p>
            </div>
            
            <div className="fade-in-section">
              <h4 className="font-semibold text-lg mb-2">Formación Académica</h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <div>
                    <span className="font-medium">Maestría en Auditoría y Gestión de Sistemas Informáticos</span>
                    <p className="text-sm text-muted-foreground">Universidad Tecnológica Nacional, 2019-2021</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <div>
                    <span className="font-medium">Licenciatura en Análisis de Sistemas Informáticos</span>
                    <p className="text-sm text-muted-foreground">Universidad de Buenos Aires, 2013-2017</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="fade-in-section">
              <h4 className="font-semibold text-lg mb-3">Conocimientos Técnicos</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Java', 'React', 'Node.js', 'AWS', 'Docker', 'SQL', 'MongoDB', 'GraphQL', 'Git', 'CI/CD'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-background text-sm font-medium rounded-full border border-primary/10 transition-all hover:shadow-sm hover:border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="fade-in-section">
              <h4 className="font-semibold text-lg mb-3">Certificaciones</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 mr-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 mr-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Certified Information Systems Auditor (CISA)</span>
                </li>
                <li className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 mr-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Oracle Certified Professional, Java Developer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
