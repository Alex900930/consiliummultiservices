import { Shield, Clock, MessageSquare, GitBranch } from 'lucide-react';

// --- DATOS DE NUESTROS COMPROMISOS (sin cambios) ---
const commitments = [
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "No habrá números confusos ni sorpresas. Te explicaremos cada detalle de tus finanzas en un lenguaje claro y comprensible."
  },
  {
    icon: Clock,
    title: "Proactividad y Puntualidad",
    description: "Nos anticipamos a los plazos fiscales y a las necesidades de tu negocio. Tu tranquilidad es nuestra prioridad."
  },
  {
    icon: MessageSquare,
    title: "Comunicación Directa y Accesible",
    description: "Siempre tendrás una línea abierta con nosotros. Respondemos tus preguntas con rapidez y estamos aquí para asesorarte."
  },
  {
    icon: GitBranch,
    title: "Soluciones a su Medida",
    description: "No ofrecemos soluciones genéricas, sino estrategias contables adaptadas a tus metas específicas."
  }
];

const Commitment = () => {
  return (
    // 1. El contenedor principal es 'relative' y el texto por defecto es blanco
    <section id="compromiso" className="relative py-20 lg:py-28 text-white">
      
      {/* 2. Capa de Fondo: se posiciona de forma absoluta y detrás de todo (z-0) */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src="/images/backgrounds/office-blur.jpg" // Asegúrate de que esta imagen exista en public/images/backgrounds/
          alt="Fondo de oficina profesional"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* 3. Capa de Contenido: se posiciona relativa y por encima del fondo (z-10) */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Imagen Profesional */}
          <div className="w-full">
            <img
              // Usamos la imagen del CEO
              src="/yainie-consilium-confianza.webp" // Corregido el nombre de la imagen como lo tenías
              alt="Yainier Consillium, CEO de Consilium Multiservices"
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div> 

          {/* Columna Derecha: El Compromiso (con colores de texto corregidos) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Nuestro Compromiso con el Cliente
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Más que tus contadores, somos tus socios estratégicos. Nuestra firma se construyó sobre un conjunto de promesas que cumplimos con cada cliente, sin excepción.
              </p>
            </div>
            
            {/* Lista de compromisos */}
            <div className="space-y-6 pt-4">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;