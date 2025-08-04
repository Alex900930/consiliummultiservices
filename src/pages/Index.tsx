import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import ExpertAdvice from "@/components/ExpertAdvice";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Packages />
      <ExpertAdvice />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
