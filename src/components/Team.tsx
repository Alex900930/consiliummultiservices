import { Phone } from 'lucide-react'; // Importamos el icono del teléfono
import { Button } from '@/components/ui/button';

// --- DATOS DEL EQUIPO ACTUALIZADOS ---
// Cambiamos 'bio' por 'quote' y añadimos un 'phone' para el CTA
const teamData = [
  {
    name: 'Yainier Consillium',
    role: 'CEO & Asesor Financiero Principal',
    image: '/team/yainier-consilium.jpg',
    quote: '"Tu éxito financiero es nuestra meta. Siempre estamos disponibles para guiarte."',
    phone: '18064213785' // Reemplaza con el número de teléfono real
  },
  {
    name: 'Carolina Consilium',
    role: 'Comercial Jefe',
    image: '/team/ana-consilium.jpg',
    quote: '"Transformamos la complejidad de los números en claridad y tranquilidad para ti."',
    phone: '18064213785'
  },
  {
    name: 'Andre Consilium', // Puedes cambiar este nombre por el real
    role: 'Gerente de Relaciones con el Cliente',
    image: '/team/jennifer-martinez.png', // Asegúrate que el nombre y extensión (.jpg o .png) sean correctos
    quote: '"Mi compromiso es que te sientas escuchado y apoyado en cada paso del proceso."',
    phone: '18064213785'
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4">
        
        {/* Header de la sección */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold  leading-tight">
            Conozca a Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Los profesionales apasionados y dedicados a la salud financiera de su negocio.
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
                      Llamar Ahora
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