
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiciosPage from "./pages/ServiciosPage";
import Contactenos from "./pages/Contactenos";
import PoliticasDePrivacidad from "./pages/PoliticasDePrivacidad";
import AvisoLegal from "./pages/AvisoLegal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} /> {/* 'index' es suficiente */}
            <Route path="servicios" element={<ServiciosPage />} /> {/* 'path' sin el / inicial es mejor para rutas anidadas */}
            <Route path="contacto" element={<Contactenos />} />
            <Route path="politicaPrivacidad" element={<PoliticasDePrivacidad />} />
            <Route path="avisoLegal" element={<AvisoLegal />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
