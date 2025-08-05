import { Award, Users, Clock, Shield } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ana Consilium",
      position: "CEO & Contadora Principal",
      experience: "15+ años",
      specialties: ["Bookkeeping", "Taxes", "Consultoría"],
      description: "Especialista en servicios contables para pequeños negocios y contratistas. Apasionada por ayudar a emprendedores a mantener sus finanzas organizadas."
    },
    {
      name: "Carlos Rodríguez",
      position: "Contador Senior",
      experience: "12+ años",
      specialties: ["Payroll", "Cuentas por Cobrar", "Reportes"],
      description: "Experto en procesamiento de nómina y gestión de cuentas por cobrar y pagar. Especializado en software contable avanzado."
    },
    {
      name: "María González",
      position: "Asesora Fiscal",
      experience: "10+ años",
      specialties: ["Taxes", "Auditorías", "Compliance"],
      description: "Especialista en presentación de impuestos y preparación para auditorías. Conocedora profunda de las regulaciones fiscales."
    },
    {
      name: "Roberto Martínez",
      position: "Consultor Financiero",
      experience: "8+ años",
      specialties: ["Análisis Financiero", "Presupuestos", "CFO Virtual"],
      description: "Consultor experto en análisis financiero y estrategias de crecimiento empresarial. Especializado en servicios premium."
    }
  ];

  const teamStats = [
    {
      icon: Award,
      number: "15+",
      label: "Años de Experiencia Colectiva"
    },
    {
      icon: Users,
      number: "3800+",
      label: "Clientes Atendidos"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Soporte Disponible"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Confidencialidad Garantizada"
    }
  ];

  return (
    <section id="equipo" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nuestro Equipo</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Conozca a nuestro
            <span className="text-primary block lg:inline"> equipo profesional</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Contadores certificados y asesores financieros dedicados a mantener sus finanzas organizadas
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon size={32} className="text-primary-foreground" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.experience} de experiencia</p>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Especialidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              ¿Por qué elegir nuestro equipo?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nuestro equipo de contadores certificados y asesores financieros está dedicado a 
              proporcionar servicios contables de la más alta calidad. Cada miembro del equipo 
              aporta años de experiencia y especialización en diferentes áreas de la contabilidad.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Certificados</h4>
                <p className="text-sm text-muted-foreground">Contadores con licencias vigentes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Puntuales</h4>
                <p className="text-sm text-muted-foreground">Cumplimos con todos los plazos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Confidenciales</h4>
                <p className="text-sm text-muted-foreground">Su información está segura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 