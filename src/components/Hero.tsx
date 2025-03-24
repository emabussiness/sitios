
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-secondary rounded-full animate-fade-in">
            Profesional en TI - Informático
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Emanuel <span className="text-primary/90">Martinez</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transformando ideas en soluciones tecnológicas innovadoras. Especializado en análisis de sistemas,
            arquitectura de software y auditoría informática.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Portafolio
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="ml-2 transition-transform group-hover:translate-x-1" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 hover:bg-primary/5"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Sobre Mí
            </Button>
          </div>
        </div>
        
        <div className="w-full mt-24 overflow-hidden">
          <div className="relative mx-auto w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/5"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
