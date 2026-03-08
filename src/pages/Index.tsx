import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProblemSolution from "@/components/home/ProblemSolution";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Niches from "@/components/home/Niches";
import Languages from "@/components/home/Languages";
import FinalCTA from "@/components/home/FinalCTA";
import FAQ from "@/components/home/FAQ";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Niches />
        <Languages />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
