import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            // Aclaramos ligeramente el video y ajustamos el contraste
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 filter brightness-110 contrast-100"
            style={{ pointerEvents: 'none' }}
          >
            <source src="/videoBackground.mp4" type="video/mp4" />
            {/* Fallback a YouTube. Nota: Los filtros de CSS no se aplicarán al <iframe> */}
            <iframe
              src="https://www.youtube.com/embed/J2WzZ4G4xbA?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&start=4&playlist=J2WzZ4G4xbA"
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] transform -translate-x-1/2 -translate-y-1/2"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ pointerEvents: 'none' }}
            />
          </video>
        </div>
        {/* El degradado ahora es más sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 mt-20 md:mt-8 text-center text-white">
        {/* Contenedor principal con efecto "Glassmorphism" */}
        <div 
          className="max-w-4xl mx-auto space-y-8 bg-black/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg"
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight"
              // Sombra de texto para máxima legibilidad
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)' }}>
            {t('hero.title')}
            <span className="text-primary"> {t('hero.subtitle')}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
             style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)' }}>
            {t('hero.description')}
          </p>

          <div className="space-y-4 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 text-lg shadow-golden transform hover:scale-105 transition-all duration-300"
            >
              {t('hero.cta')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
            >
              {t('hero.secondary')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mt-20 max-w-4xl mx-auto">
          {/* Se aplica el mismo principio a las estadísticas */}
          <div className="text-center bg-black/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>500+</div>
            <div className="text-lg text-gray-300">Servicios exitosos</div>
          </div>
          <div className="text-center bg-black/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>3800+</div>
            <div className="text-lg text-gray-300">Clientes satisfechos</div>
          </div>
          <div className="text-center bg-black/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>98%</div>
            <div className="text-lg text-gray-300">Casos resueltos</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;