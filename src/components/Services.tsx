import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Calculator, FileText, Users, Shield, TrendingUp, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping Mensual",
      description: "Mantenemos sus registros financieros organizados y actualizados mensualmente",
      features: [
        "Registro de ingresos y gastos",
        "Conciliación bancaria mensual", 
        "Conciliación de tarjetas de crédito",
        "Clasificación de transacciones",
        "Mantenimiento del Chart of Accounts",
        "Reportes mensuales: P&L, Balance Sheet, Cash Flow"
      ],
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Cuentas por Cobrar y Pagar",
      description: "Gestión profesional de sus cuentas por cobrar y pagar",
      features: [
        "Facturación a clientes",
        "Registro de pagos recibidos",
        "Gestión de cuentas vencidas",
        "Registro y programación de pagos",
        "Reportes de Aging",
        "Seguimiento de pagos pendientes"
      ],
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Payroll Básico",
      description: "Procesamiento completo de nómina para su empresa",
      features: [
        "Procesamiento de nómina",
        "Emisión de paystubs",
        "Cálculo de retenciones",
        "Presentación de formularios 941, 940, W-2, W-3",
        "Integración con software de nómina",
        "Depósitos directos"
      ],
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Presentación de Taxes",
      description: "Presentación profesional de todos sus impuestos",
      features: [
        "Declaración de impuestos individuales (1040)",
        "Declaración de negocios (1065, 1120, 1120-S)",
        "Declaración de Sales Tax",
        "Declaración de payroll taxes",
        "Planificación fiscal",
        "Representación ante IRS"
      ],
      color: "bg-red-500"
    },
    {
      icon: TrendingUp,
      title: "Consultoría y Asesoría",
      description: "Asesoría estratégica para optimizar sus finanzas",
      features: [
        "Configuración inicial de QuickBooks/Xero",
        "Limpieza contable",
        "Capacitación básica",
        "Preparación para auditorías",
        "Análisis financiero y presupuestos",
        "Estrategias de crecimiento"
      ],
      color: "bg-orange-500"
    },
    {
      icon: Award,
      title: "Servicios Premium",
      description: "Servicios avanzados para empresas en crecimiento",
      features: [
        "Setup de POS",
        "Facturación electrónica",
        "Reportes para inversionistas/bancos",
        "CFO Virtual",
        "Representación ante IRS",
        "Auditorías internas"
      ],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nuestros Servicios</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Servicios contables
            <span className="text-primary block lg:inline"> profesionales</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Especialistas en servicios de bookkeeping, contabilidad y asesoría para contratistas, 
            pequeños negocios y emprendedores
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200/50">
              <CardHeader className="text-center pb-6">
                <div className={`w-20 h-20 mx-auto mb-6 p-4 ${service.color} rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-golden hover:scale-105 transition-all duration-300">
                    Solicitar Servicio
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              ¿No encuentra el servicio que necesita?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctenos para servicios personalizados. Nuestro equipo está listo para 
              ayudarle con cualquier necesidad contable específica de su negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg shadow-golden transform hover:scale-105 transition-all duration-300">
                Consulta personalizada gratuita
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300">
                Llamar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;