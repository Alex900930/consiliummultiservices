import { whatsappConfig, getPersonalizedMessage } from '@/config/whatsapp';

/**
 * Función para abrir WhatsApp con un mensaje personalizado
 * @param customMessage - Mensaje personalizado opcional (si no se proporciona, se usa el mensaje por defecto)
 */
export const openWhatsApp = (customMessage?: string) => {
  const phoneNumber = whatsappConfig.phoneNumber;
  const message = encodeURIComponent(customMessage || getPersonalizedMessage());
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  window.open(whatsappUrl, '_blank');
};

/**
 * Función para abrir WhatsApp con un mensaje específico para agendar citas
 */
export const openWhatsAppForAppointment = () => {
  const message = '¡Hola! Me gustaría agendar una cita para una consulta gratuita. ¿Podrían ayudarme?';
  openWhatsApp(message);
};

/**
 * Función para abrir WhatsApp con un mensaje específico para consultas
 */
export const openWhatsAppForConsultation = () => {
  const message = '¡Hola! Me gustaría obtener más información sobre sus servicios. ¿Podrían ayudarme?';
  openWhatsApp(message);
};

/**
 * Función para abrir WhatsApp con un mensaje específico para servicios
 */
export const openWhatsAppForServices = () => {
  const message = '¡Hola! Me gustaría conocer más sobre sus servicios contables y financieros. ¿Podrían ayudarme?';
  openWhatsApp(message);
};
