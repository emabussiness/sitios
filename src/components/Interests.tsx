
import { useEffect, useRef } from 'react';

const interestsData = [
  {
    type: "Película",
    title: "Interstellar",
    creator: "Christopher Nolan",
    year: "2014",
    description: "Una obra maestra que combina ciencia con emoción humana, explorando conceptos de relatividad y amor a través del tiempo y el espacio.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2494&auto=format&fit=crop",
    color: "from-indigo-900/80 to-indigo-900/30"
  },
  {
    type: "Serie",
    title: "Mr. Robot",
    creator: "Sam Esmail",
    year: "2015-2019",
    description: "Una mirada fascinante al mundo de la seguridad informática, hacktivismo y salud mental, con narrativa innovadora y personajes complejos.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    color: "from-red-900/80 to-red-900/30"
  },
  {
    type: "Videojuego",
    title: "The Legend of Zelda: Breath of the Wild",
    creator: "Nintendo",
    year: "2017",
    description: "Una aventura de mundo abierto que redefine la exploración y la libertad, con mecánicas de juego innovadoras y un diseño de mundo impresionante.",
    image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=2070&auto=format&fit=crop",
    color: "from-green-900/80 to-green-900/30"
  },
];

const Interests = () => {
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
    <section id="interests" ref={sectionRef} className="py-24">
      <div className="section-container">
        <h2 className="section-title mb-16">Mis Intereses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interestsData.map((item, index) => (
            <div key={index} className="fade-in-section card-hover">
              <div className="h-full rounded-xl overflow-hidden border border-border/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10`}></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-background/90 rounded-md backdrop-blur-sm">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 line-clamp-1">{item.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <span>{item.creator}</span>
                    <span className="mx-2">•</span>
                    <span>{item.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <p className="text-muted-foreground mb-4">
            Estos intereses influyen en mi enfoque creativo y técnico para resolver problemas.
          </p>
          <div className="inline-flex items-center text-sm font-medium cursor-pointer group text-primary">
            <span className="mr-1">Descubrir más sobre mis intereses</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="transition-transform group-hover:translate-x-1" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
