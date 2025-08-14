import { Shield, Clock, MessageSquare, GitBranch, Target, Eye } from 'lucide-react';

// --- DATOS PARA MISIÓN Y VISIÓN ---
const missionVisionData = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description: "En Consilium Multiservices LLC, nos dedicamos a proveer servicios integrales de calidad, con el objetivo de facilitar la vida y el éxito de nuestros clientes en todo Estados Unidos. Ofrecemos asesoría experta y soluciones individuales; asegurando un proceso eficiente, transparente y accesible, que cumpla con las necesidades y expectativas en un entorno dinámico y multicultural."
  },
  {
    icon: Eye,
    title: "Nuestra Visión",
    description: "Ser una empresa de referencia en todo el país, reconocida por su excelencia y compromiso en ofrecer soluciones completas y confiables en inmigración, seguros, impuestos y notaría. Aspiramos a ser el socio estratégico de nuestros clientes en su camino hacia la estabilidad, el crecimiento y la integración plena en la sociedad, contribuyendo al bienestar de las comunidades que servimos, sin importar su ubicación a nivel nacional."
  }
];

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

const CommitmentAndMission = () => {
  return (
    // Usamos un Fragmento de React (<>) para devolver dos secciones como un solo elemento
    <>
      {/* ====== NUEVA SECCIÓN: MISIÓN Y VISIÓN ====== */}
      <section id="mision-vision" className="py-20 lg:py-28 bg-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {missionVisionData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary text-white rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold ">{item.title}</h2>
                <p className="mt-4 text-base  max-w-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECCIÓN DE COMPROMISO EXISTENTE (Revisada para fluir con la nueva sección) ====== */}
      <section id="compromiso" className="relative py-20 lg:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="w-full">
              <img
                src="/yainie-consilium-confianza.png"
                alt="Yainier Consillium, CEO de Consilium Multiservices"
                className="rounded-xl shadow-2xl object-cover w-full h-full"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Nuestro Compromiso con el Cliente
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Más que tus contadores, somos tus socios estratégicos. Nuestra firma se construyó sobre un conjunto de promesas que cumplimos con cada cliente, sin excepción.
                </p>
              </div>
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
    </>
  );
};

// Se recomienda cambiar el nombre de la exportación para reflejar el nuevo contenido
export default CommitmentAndMission;