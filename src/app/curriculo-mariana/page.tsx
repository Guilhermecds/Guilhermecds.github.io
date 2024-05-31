import Educacao from "@/components/mariana/Educacao";
import Footer from "@/components/mariana/Footer";
import FotoCelular from "@/components/mariana/FotoCelular";
import HabilidadesCompetencias from "@/components/mariana/HabilidadesCompetencias";
import Header from "@/components/mariana/Header";
import Objetivo from "@/components/mariana/Objetivo";
import QuebraLinha from "@/components/mariana/QuebraLinha";
import Navbar from "@/components/mariana/navbar";
import Resumo from "@/components/mariana/resumo";

export default function CurriculoMariana() {
  return (
    <>
      <Navbar />
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
