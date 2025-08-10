// Configuración del botón de WhatsApp
export const whatsappConfig = {
  // Número de teléfono del dueño de la agencia (formato internacional)
  phoneNumber: '+18064213785', // Número real de Yainier Consilium
  
  // Mensaje predefinido que aparecerá en WhatsApp
  defaultMessage: 'Hola! Me gustaría obtener más información sobre sus servicios. ¿Podrían ayudarme?',
  
  // Horarios de atención
  businessHours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 2:00 PM',
    sunday: 'Cerrado'
  },
  
  // Tiempo de respuesta estimado
  responseTime: 'Respuesta en minutos',
  
  // Nombre del dueño/representante
  ownerName: 'Yainier Consilium',
  
  // Cargo del dueño
  ownerTitle: 'Fundador y Contador Principal',
  
  // Zona horaria
  timezone: 'EST (Eastern Standard Time)'
};

// Función para obtener el mensaje personalizado según la hora del día
export const getPersonalizedMessage = (): string => {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return '¡Buenos días! Me gustaría obtener más información sobre sus servicios. ¿Podrían ayudarme?';
  } else if (hour < 18) {
    return '¡Buenas tardes! Me gustaría obtener más información sobre sus servicios. ¿Podrían ayudarme?';
  } else {
    return '¡Buenas noches! Me gustaría obtener más información sobre sus servicios. ¿Podrían ayudarme?';
  }
};

// Función para verificar si está en horario de atención (opcional)
export const isBusinessHours = (): boolean => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay(); // 0 = Domingo, 1 = Lunes, etc.
  
  // Domingo cerrado
  if (day === 0) return false;
  
  // Sábado horario reducido
  if (day === 6) {
    return hour >= 10 && hour < 14;
  }
  
  // Lunes a viernes horario completo
  return hour >= 9 && hour < 18;
};
