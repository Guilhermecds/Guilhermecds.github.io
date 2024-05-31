import Footer from "@/components/mariana/Footer";
import Foto from "@/components/mariana/Foto";
import Header from "@/components/mariana/Header";
import Navbar from "@/components/mariana/navbar";
import Link from 'next/link';

export default function CurriculoMariana() {
  return (
    <>
      <Navbar />
      <div className="ml-80 p-5 bg-gray-950 shadow-lg border-2 border-black" style={{ minHeight: '100vh' }}>
        <Header />
        <div className="mt-8">
          <h2 className="text-3xl text-left font-bold mb-8 text-gradient">Resumo</h2>
          <p className="text-gradient text-lg">Sou uma estudante de psicologia dedicada e apaixonada por entender o comportamento humano e suas complexidades. Atualmente, estou buscando uma sólida formação teórica aliada a experiências práticas que me permitam desenvolver habilidades de análise, empatia e intervenção.<br/>
          Ao longo da minha jornada acadêmica, tenho demonstrado interesse em áreas como psicologia clínica e psicologia social. Minhas habilidades incluem a capacidade de conduzir pesquisas, analisar dados, e comunicar de forma clara e eficaz minhas descobertas.<br/>
          Estou comprometida em contribuir para o avanço da psicologia e para o bem-estar das pessoas, buscando sempre aprender e crescer tanto academicamente quanto pessoalmente.</p>
        </div>
        <hr className="my-10 border-t-1 border-yellow-700 rounded-full" />
        <div className="mt-8">
          <h2 className="text-3xl text-left font-bold mb-8 text-gradient">Objetivo</h2>
          <p className="text-gradient text-lg">Como estudante de Psicologia, busco aprimorar meu entendimento sobre o comportamento humano e as complexidades da mente, desenvolvendo habilidades práticas em avaliação, diagnóstico e intervenção psicológica. Meu objetivo é contribuir para o bem-estar emocional e mental das pessoas, aplicando conhecimentos teóricos em contextos práticos e promovendo uma abordagem empática e ética em todas as interações profissionais.</p>
        </div>
        <hr className="my-10 border-t-1 border-yellow-700 rounded-full" />
        {/* <div className="mt-5">
          <h2 className="text-xl text-center text-black font-bold mb-1">Experiencia Profissional</h2>
        </div>
        <hr className="my-10 border-t-1 border-yellow-700 rounded-full" /> */}
        <div className="mt-5 text-justify">
          <h2 className="text-3xl text-left font-bold mb-8 text-gradient">Habilidades/Competências</h2>
            <div className="flex items-start mb-2">
              <svg className="w-4 h-4 mr-2 fill-yellow-300 text-blue-800 mt-1" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
              <p className="text-gradient text-lg">Empatia e habilidades de escuta ativa para compreender as necessidades e preocupações dos pacientes.</p>
            </div>
            <div className="flex items-start mb-2">
              <svg className="w-4 h-4 mr-2 fill-yellow-300 text-blue-800 mt-1" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
              <p className="text-gradient text-lg">Habilidades em comunicação verbal e escrita para relatar resultados de forma clara e objetiva.</p>
            </div>
            <div className="flex items-start mb-2">
              <svg className="w-4 h-4 mr-2 fill-yellow-300 text-blue-800 mt-1" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
              <p className="text-gradient text-lg">Capacidade de trabalhar em equipe multidisciplinar, colaborando com outros profissionais de saúde.</p>
            </div>
            <div className="flex items-start mb-2">
              <svg className="w-4 h-4 mr-2 fill-yellow-300 text-blue-800 mt-1" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
              <p className="text-gradient text-lg">Ética profissional e capacidade de manter confidencialidade das informações dos pacientes.</p>
            </div>
            <div className="flex items-start mb-2">
              <svg className="w-4 h-4 mr-2 fill-yellow-300 text-blue-800 mt-1" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
              <p className="text-gradient text-lg">Flexibilidade e resiliência para lidar com situações desafiadoras e imprevistos na prática clínicia.</p>
            </div>
        </div>
        <hr className="my-10 border-t-1 border-yellow-700 rounded-full" />
        <div className="mt-5">
          <h2 className="text-3xl text-left font-bold mb-8 text-gradient">Educação</h2>
          <article className="flex flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <p className="text-gradient text-lg font-bold leading-6">ALFA UMUARAMA - PSICOLOGIA</p>
              <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">2022 - 2027</p>
            </div>
            <div className="group relative">
              <p className="mt-5 line-clamp-10 text-gradient text-lg leading-6">No curso de Psicologia da UniALFA as competências esperadas para a formação em Psicologia devem ser entendidas como a capacidade de mobilizar saberes, habilidades, atitudes, bem como lidar com os fatores contextuais, transformando-os em ação efetiva diante dos desafios profissionais que lhe serão apresentados. Este profissional estará habilitado para concursos públicos, além da oportunidade de atuar em diversos níveis da Atenção em Saúde Pública, desde a atenção básica até a terciária; na Proteção Social Básica e a Proteção Social Especial e em seus respectivos equipamentos, em Escolas e em suas relações, nas Empresas em diversas atribuições entre Recursos Humanos e gestão de pessoas. Este profissional também estará habilitado para atuar como profissional liberal em Clinicas, para atendimentos individuais em diversos processos de desenvolvimento humano (infância, jovens, adultez e envelhecimentos), em grupos, atendimentos e acompanhamento de casais e famílias, entre outras áreas e campos de atuação psicológica.</p>
            </div>
            <br />
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
}
