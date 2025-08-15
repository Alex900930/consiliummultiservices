import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Analytics } from '@vercel/analytics/react';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* El <main> envuelve el contenido principal de cada página */}
      <main > {/* Padding para que el contenido no quede debajo del Header fijo */}
        <Outlet /> {/* Aquí es donde se renderizará el contenido de tu página (Index, ServiciosPage, etc.) */}
        <Analytics />
      </main>
      <CTA /> {/* Opcional: si quieres el CTA en todas las páginas */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;