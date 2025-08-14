import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Commitment from "@/components/Commitment";
import Process from "@/components/Process";
import ClientsNationwide from "@/components/ClientsNationwide";
import CommitmentAndMission from "@/components/CommitmentAndMission";

const Index = () => {
  return (
    <div >
      <Hero />
      <Services />
     {/*  <About /> */}
      <Testimonials />
      <CommitmentAndMission />
      {/* <Commitment /> */}
      <Process />
      <ClientsNationwide />
      <Team />
    
    </div>
  );
};

export default Index;
