import { UserCheck, ClipboardList, Cog, TrendingUp } from 'lucide-react';

// --- DATOS DE LOS PASOS DEL PROCESO ---
// Estructuramos los datos para que sean fáciles de leer y actualizar.
const processSteps = [
  {
    icon: UserCheck,
    title: "Consulta Inicial y Diagnóstico",
    description: "Comenzamos con una conversación profunda para entender sus necesidades, desafíos y metas. Analizamos su situación actual para establecer un punto de partida claro."
  },
  {
    icon: ClipboardList,
    title: "Diseño de la Estrategia Contable",
    description: "Con base en el diagnóstico, creamos un plan de acción a su medida. Ya sea para organizar sus libros, planificar sus impuestos o abrir su empresa, definimos cada paso."
  },
  {
    icon: Cog,
    title: "Implementación y Ejecución",
    description: "Nuestro equipo de expertos se pone manos a la obra. Ejecutamos el plan con precisión, manteniendo sus registros al día, procesando la nómina y preparando sus declaraciones."
  },
  {
    icon: TrendingUp,
    title: "Reportes y Seguimiento Continuo",
    description: "Le mantenemos informado con reportes financieros claros y reuniones periódicas. Monitoreamos su progreso y ajustamos la estrategia para asegurar su crecimiento continuo."
  }
];

const Process = () => {
  return (
    // Fondo blanco para un contraste limpio con las secciones oscuras
    <section id="proceso" className="py-20 lg:py-28 bg-gradient">
      <div className="container mx-auto px-4">
        
        {/* Header de la sección */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold  leading-tight">
            Manténgase Informado en Cada Etapa
          </h2>
          <p className="mt-4 text-lg  max-w-3xl mx-auto">
            Nuestro proceso está diseñado para ser completamente transparente, asegurando que usted tenga claridad y control sobre sus finanzas en todo momento.
          </p>
        </div>

        {/* Grid con los 4 pasos del proceso */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-gray-50/70 p-8 rounded-xl border border-gray-200/80 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-md">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;