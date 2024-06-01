import Educacao from "@/components/Educacao";
import Experiencia from "@/components/Experiencia";
import Footer from "@/components/Footer";
import FotoCelular from "@/components/FotoCelular";
import HabilidadesCompetencias from "@/components/HabilidadesCompetencias";
import Header from "@/components/Header";
import LinguagensFerramentas from "@/components/LinguagensFerramentas";
import Navbar from "@/components/Navbar";
import Objetivo from "@/components/Objetivo";
import QuebraLinha from "@/components/QuebraLinha";
import Resumo from "@/components/Resumo";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="ml-80 p-5 bg-gray-950 shadow-lg border-2 border-black curriculo" style={{ minHeight: '100vh' }}>
        <Header />
        <FotoCelular />
        <Resumo />
        <QuebraLinha />
        <Objetivo />
        <QuebraLinha />
        <HabilidadesCompetencias />
        <QuebraLinha />
        <Experiencia />
        <QuebraLinha />
        <LinguagensFerramentas />
        <QuebraLinha />
        <Educacao />
        <Footer />
      </div>
    </>
  );
}
