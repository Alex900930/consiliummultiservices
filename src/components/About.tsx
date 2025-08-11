import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Datos de estadísticas clave
const stats = [
  { number: "15+", label: "Años de Experiencia" },
  { number: "3800+", label: "Clientes Satisfechos" },
  { number: "500+", label: "Servicios Exitosos" },
  { number: "98%", label: "Tasa de Éxito" }
];

const About = () => {
  const { t } = useTranslation();

  return (
    // ¡LA CLAVE! Un fondo oscuro y elegante para esta sección específica.
    <section 
  id="nosotros" 
  className="py-20 lg:py-28 bg-gradient " // <-- ¡USA ESTA LÍNEA!
>
   {/*  <section id="nosotros" className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white"> */}
      <div className="container mx-auto px-4">

        {/* --- Bloque Principal: Nuestra Historia (2 columnas) --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Imagen Profesional */}
          <div className="w-full">
            <img
              src="/yainie-consilium.png" 
              alt="Ana Consilium, Fundadora y Contadora Principal"
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div>

          {/* Columna Derecha: Texto directamente sobre el fondo oscuro */}
          <div className="space-y-6">
            <h2 
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              Nuestra Historia
            </h2>
            
            <div 
              className="text-lg text-gray-300 space-y-4 leading-relaxed"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}
            >
              <p>
                Consilium Multiservices nació de una simple observación: innumerables emprendedores y dueños de pequeños negocios, apasionados por lo que hacen, se sentían abrumados y perdidos en el complejo mundo de las finanzas y los impuestos.
              </p>
              <p>
                Fundada sobre los pilares de la **confianza, la claridad y el compromiso personal**, nuestra misión es transformar la contabilidad de una obligación estresante a una herramienta poderosa para el crecimiento.
              </p>
            </div>
                        
            <div className="pt-4">
                <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-golden">
                    <Link to="/servicios">Conozca Nuestros Servicios</Link>
                </Button>
            </div>
          </div>
        </div>

        {/* --- Barra de Estadísticas: Prueba Social sobre el fondo oscuro --- */}
        <div className="mt-20 lg:mt-28 pt-12 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-bold text-primary">{stat.number}</p>
                <p className="mt-2 text-base text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;