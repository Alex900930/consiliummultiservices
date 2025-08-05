import { Check, Award, Users, Clock, Shield, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Shield,
      title: "Confianza Total",
      description: "Tu información financiera está segura con nosotros"
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Cumplimos con todos los plazos fiscales"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada cliente recibe atención individualizada"
    }
  ];

  const stats = [
    { number: "15+", label: "Años de Experiencia", icon: Award },
    { number: "3800+", label: "Clientes Satisfechos", icon: Users },
    { number: "500+", label: "Servicios Exitosos", icon: TrendingUp },
    { number: "98%", label: "Tasa de Éxito", icon: Check }
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Consilium Multiservices LLC</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {t('about.title')}
            <span className="text-primary block lg:inline"> {t('about.titleHighlight')}</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                Especialistas en Servicios Financieros
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos una firma especializada en servicios de bookkeeping, contabilidad y asesoría 
                para contratistas, pequeños negocios y emprendedores. Nuestro objetivo es ayudarte 
                a mantener tus finanzas claras y tus impuestos al día.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-white/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <value.icon size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg shadow-golden transform hover:scale-105 transition-all duration-300">
                Conoce Nuestros Servicios
              </button>
            </div>
          </div>

          {/* Right Column - Image & Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="/lovable-uploads/176efbeb-37d5-4aea-b8e1-aff42adfb95f.png" 
                alt="Equipo profesional de Consilium Multiservices LLC"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Stats Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Quote & Certification */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Quote */}
          <div className="space-y-6">
            <blockquote className="text-2xl lg:text-3xl font-semibold text-foreground italic border-l-4 border-primary pl-6 leading-relaxed">
              "En Consilium, creemos que cada negocio merece tener sus finanzas en orden. 
              Nuestro compromiso es hacer que la contabilidad sea simple y accesible."
            </blockquote>
            <cite className="text-primary font-semibold text-lg block">
              - Equipo Consilium Multiservices
            </cite>
          </div>

          {/* Certification & Location */}
          <div className="space-y-6">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award size={32} className="text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Profesionales Certificados</h4>
                  <p className="text-muted-foreground">Contadores y asesores con licencias vigentes</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white/50 rounded-xl">
                    <div className="text-lg font-bold text-foreground">{t('about.location')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.locationSub')}</div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-xl">
                    <div className="text-lg font-bold text-foreground">{t('about.support')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.supportSub')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;