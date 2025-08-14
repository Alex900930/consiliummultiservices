import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

// Los datos que NO se traducen (imágenes, teléfonos)
const teamStaticData = [
  { id: 0, image: '/team/yainier-consilium.jpg', phone: '18064213785' },
  { id: 1, image: '/team/ana-consilium.jpg', phone: '18064213785' },
  { id: 2, image: '/team/jennifer-martinez.png', phone: '18064213785' }
];

const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="equipo" className="py-20 lg:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            {t('team.title')}
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto md:text-4xl font-bold leading-tight text-primary"
            style={{ textShadow: '0 4px 15px rgba(0, 0, 0, 0.7)' }}
          >
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Mapeamos sobre los datos estáticos */}
          {teamStaticData.map((member) => (
            <div key={member.id} className="rounded-lg shadow-md overflow-hidden border border-gray-500 text-center flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src={member.image}
                // Construimos la clave del nombre para el alt text
                alt={t(`team.member.${member.id}.name`)}
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-grow">
                {/* 
                  AQUÍ ESTÁ LA MAGIA: 
                  Construimos la clave de traducción dinámicamente para cada propiedad.
                */}
                <h3 className="text-2xl font-bold text-primary">
                  {t(`team.member.${member.id}.name`)}
                </h3>
                <p className="text-md mt-1">
                  {t(`team.member.${member.id}.role`)}
                </p>
                
                <p className="italic my-4 flex-grow">
                  "{t(`team.member.${member.id}.quote`)}"
                </p>
                
                <div className="mt-auto pt-4">
                  <Button asChild size="lg" className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden">
                    <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      {t('team.callNow')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;