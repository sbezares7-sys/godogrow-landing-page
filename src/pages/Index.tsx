import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Packages from "@/components/Packages";
import Retainer from "@/components/Retainer";
import CaseStudy from "@/components/CaseStudy";
import VideoCase from "@/components/VideoCase";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Packages />
      <Retainer />
      <CaseStudy />
      <VideoCase />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
