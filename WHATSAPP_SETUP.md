# Configuración del Botón de WhatsApp

## 🚀 Características del Componente

El botón de WhatsApp flotante incluye:

- ✅ **Botón flotante siempre visible** en la esquina inferior derecha
- ✅ **Efectos visuales atractivos** con animaciones y gradientes
- ✅ **Tooltip informativo** al pasar el mouse
- ✅ **Botón flotante elegante** sin indicadores adicionales
- ✅ **Mensaje personalizado** según la hora del día
- ✅ **Integración con i18n** para múltiples idiomas
- ✅ **Responsive design** para todos los dispositivos

## ⚙️ Configuración Rápida

### 1. Cambiar el Número de WhatsApp

Edita el archivo `src/config/whatsapp.ts`:

```typescript
export const whatsappConfig = {
  // Número de WhatsApp de Yainier Consilium
  phoneNumber: '+18064213785', // Formato internacional
  
  // Resto de la configuración...
};
```

**Formato del número:**
- ✅ **Correcto:** `+1234567890` (con código de país)
- ❌ **Incorrecto:** `1234567890` (sin código de país)
- ❌ **Incorrecto:** `(123) 456-7890` (con formato local)

### 2. Personalizar el Mensaje

```typescript
export const whatsappConfig = {
  // Mensaje que aparecerá en WhatsApp
  defaultMessage: 'Hola! Me gustaría obtener más información sobre sus servicios. ¿Podrían ayudarme?',
  
  // Nombre del dueño
  ownerName: 'Yainier Consilium',
  
  // Cargo del dueño
  ownerTitle: 'Fundador y Contador Principal',
};
```

### 3. Ajustar Horarios de Atención

```typescript
export const whatsappConfig = {
  businessHours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 2:00 PM',
    sunday: 'Cerrado'
  },
};
```

## 🎨 Personalización Visual

### Cambiar Colores

El botón usa los colores de WhatsApp por defecto. Para personalizar, edita el componente `WhatsAppButton.tsx`:

```tsx
// Cambiar el gradiente del botón
<div className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
```

### Cambiar Posición

```tsx
// Cambiar posición (bottom-6 right-6 = esquina inferior derecha)
<div className="fixed bottom-6 right-6 z-50 group cursor-pointer">
```

**Posiciones disponibles:**
- `bottom-6 right-6` - Esquina inferior derecha
- `bottom-6 left-6` - Esquina inferior izquierda
- `top-6 right-6` - Esquina superior derecha
- `top-6 left-6` - Esquina superior izquierda

## 📱 Funcionalidades

### Mensaje Personalizado por Hora

El botón automáticamente ajusta el mensaje según la hora:

- **Mañana (antes de 12 PM):** "¡Buenos días!..."
- **Tarde (12 PM - 6 PM):** "¡Buenas tardes!..."
- **Noche (después de 6 PM):** "¡Buenas noches!..."

### Botón Simplificado

El botón de WhatsApp ahora es más limpio y elegante, mostrando solo el icono principal con efectos visuales atractivos.

## 🔧 Instalación

El componente ya está integrado en el Layout y aparecerá automáticamente en todas las páginas.

## 📋 Checklist de Configuración

- [ ] Cambiar `phoneNumber` en `whatsapp.ts`
- [ ] Verificar formato internacional del número
- [ ] Personalizar mensaje predeterminado
- [ ] Ajustar horarios de atención
- [ ] Personalizar nombre y cargo del dueño
- [ ] Probar en diferentes dispositivos
- [ ] Verificar que abre WhatsApp correctamente

## 🚨 Solución de Problemas

### El botón no aparece
- Verificar que esté importado en `Layout.tsx`
- Revisar la consola del navegador por errores

### No abre WhatsApp
- Verificar formato del número de teléfono
- Asegurar que el número tenga código de país (+1 para USA)

### Problemas de estilo
- Verificar que Tailwind CSS esté funcionando
- Revisar que no haya conflictos de CSS

## 📞 Soporte

Si tienes problemas con la configuración, revisa:
1. Formato del número de teléfono
2. Consola del navegador por errores
3. Que todos los archivos estén en las ubicaciones correctas

---

**¡Listo!** Tu botón de WhatsApp estará funcionando y los clientes podrán contactar fácilmente a Yainier Consilium.
