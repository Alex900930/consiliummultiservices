import { Phone } from 'lucide-react'; // Importamos el icono del teléfono
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

// --- DATOS DEL EQUIPO ACTUALIZADOS ---
// Cambiamos 'bio' por 'quote' y añadimos un 'phone' para el CTA
const teamData = [
  {
    name: 'YAINIER SANCHEZ',
    role: 'CO - CEO Consilium Tax & Accounting',
    image: '/team/yainier-consilium.jpg',
    quote: '"Especialista en preparación de impuestos y servicios contables para pequeñas empresas. Su enfoque está en ayudar a emprendedores y dueños de negocios a mantener sus finanzas en orden, cumplir con sus obligaciones fiscales y optimizar sus recursos. Con compromiso y precisión, ofrece soluciones contables adaptadas a las necesidades de cada cliente."',
    phone: '18064213785' // Reemplaza con el número de teléfono real
  },
  {
    name: 'CAROLINA GONZALEZ',
    role: 'CO - CEO Consilium Tax & Accounting',
    image: '/team/ana-consilium.jpg',
    quote: '"Experta en la preparación de formularios migratorios con amplia experiencia ayudando a la comunidad en procesos como: Asilo, permisos de trabajo, peticiones familiares y más. Además, cuenta con licencia como agente de seguros de vida y salud, brindando asesoría confiable y personalizada para proteger a las familias en cada etapa de su vida."',
    phone: '18064213785'
  },
  {
    name: 'KARINA GÓMEZ', // Puedes cambiar este nombre por el real
    role: 'Asistente Administrativo',
    image: '/team/jennifer-martinez.png', // Asegúrate que el nombre y extensión (.jpg o .png) sean correctos
    quote: '"Mano derecha de nuestro equipo. Con amplia experiencia en atención al cliente y tareas administrativas. Karina se encarga de coordinar citas, dar seguimiento a los casos y garantizar una atención amable, eficiente y personalizada. Es un pilar clave en la conexión directa con nuestra comunidad."',
    phone: '18064213785'
  }
];

const Team = () => {
  const { t } = useTranslation();
  
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4">
        
        {/* Header de la sección */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold  leading-tight">
          {t('team.title')}
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto md:text-4xl font-bold leading-tight text-primary"
          style={{ textShadow: '0 4px 15px rgba(0, 0, 0, 0.7)' }}
          >
          {t('team.subtitle')}
          </p>
        </div>

        {/* --- GRID CON LAS TARJETAS DEL EQUIPO REDISEÑADAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamData.map((member, index) => (
            <div key={index} className=" rounded-lg shadow-md overflow-hidden border border-gray-500 text-center flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src={member.image}
                alt={`Foto de ${member.name}`}
                className="w-full h-80 object-cover object-center"
              />
              {/* Contenedor que permite que el botón se vaya al fondo */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                <p className="text-md  mt-1">{member.role}</p>
                
                {/* La frase de confianza */}
                <p className=" italic my-4 flex-grow">
                  "{member.quote}"
                </p>
                
                {/* El botón de llamada a la acción */}
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