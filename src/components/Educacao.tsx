export default function Educacao() {
    return (
        <div className="mt-5 text-justify">
          <h2 className="text-3xl text-left font-bold mb-8 text-gradient titulos">Educação</h2>
          <article className="flex flex-col items-start justify-between">
            <div className="flex flex-column  items-center gap-x-4 text-xs">
              <p className="text-gradient text-lg font-bold leading-6">ALFA UMUARAMA - Sistemas para Internet</p>
              <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-bold text-gray-600 hover:bg-gray-100 data-universidade">2022 - 2024 (3 anos)</p>
            </div>
            <div className="group relative">
              <p className="mt-5 line-clamp-10 text-gradient text-lg leading-6">Durante meu curso de Sistemas para Internet, adquiri um amplo conhecimento teórico e prático em diversas áreas essenciais para o desenvolvimento e administração de sistemas digitais. Isso incluiu uma abordagem abrangente sobre tópicos como Administração de Redes/Servidores, DBA - Administrador de Banco de Dados, Desenvolvimento Back-End, Desenvolvimento de Jogos e Desenvolvimento Mobile (Dispositivos Móveis). Essa formação proporcionou-me uma base sólida para compreender os principais conceitos e práticas em cada uma dessas áreas, preparando-me para enfrentar os desafios do mercado de tecnologia da informação com confiança e competência.</p>
            </div>
            <br />
          </article>
        </div>
    );
}