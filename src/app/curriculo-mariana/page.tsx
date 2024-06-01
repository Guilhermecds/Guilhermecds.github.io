import Educacao from "@/components/mariana/Educacao";
import FotoCelular from "@/components/mariana/FotoCelular";
import HabilidadesCompetencias from "@/components/mariana/HabilidadesCompetencias";
import Header from "@/components/mariana/Header";
import Objetivo from "@/components/mariana/Objetivo";
import Resumo from "@/components/mariana/Resumo";
import Foto from "@/components/mariana/Foto";
import QuebraLinha from "@/components/QuebraLinha";
import Footer from "@/components/Footer";
import Navbar from "@/components/mariana/Navbar";

export default function CurriculoMariana() {
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
        <Educacao />
        <Footer />
      </div>
    </>
  );
}
