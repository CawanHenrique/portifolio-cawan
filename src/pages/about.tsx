import { Briefcase, GraduationCap, Code, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 mt-16">
          <h2 className="text-4xl font-bold mb-2">Sobre Mim</h2>
          <p className="text-gray-600">
            Um pouco sobre minha jornada e minhas paixões.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-500 text-white rounded-full p-4 mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Formação</h3>
            <p className="text-gray-700">
              Atualmente cursando Sistemas para Internet. Busco
              constantemente aprimorar meus conhecimentos unindo a base teórica
              da faculdade com a prática do mercado.
            </p>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-500 text-white rounded-full p-4 mb-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Experiência</h3>
            <p className="text-gray-700">
              Como desenvolvedor Full-Stack, tenho experiência na criação de
              soluções digitais completas, desde o back-end robusto com PHP e
              Laravel até interfaces dinâmicas e modernas com React e Tailwind
              CSS.
            </p>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-500 text-white rounded-full p-4 mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Foco Principal</h3>
            <p className="text-gray-700">
              Minha paixão é transformar ideias em realidade. Sou especializado
              em desenvolver aplicações web eficientes e escaláveis, sempre
              focado em performance, código limpo e nas melhores práticas do
              mercado.
            </p>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg shadow-lg p-8 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-500 text-white rounded-full p-4 mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Além do Código</h3>
            <p className="text-gray-700">
              Fora do universo da programação, sou um praticante de Jiu-Jitsu. A
              disciplina, o foco e a resolução de problemas do esporte são
              valores que aplico diretamente no meu trabalho como desenvolvedor.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm  hover:shadow-lg transition-shadow duration-300">
              <p className="text-4xl font-bold text-blue-600 mb-2">1+</p>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Anos de Experiência
              </h4>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm  hover:shadow-lg transition-shadow duration-300">
              <p className="text-4xl font-bold text-blue-600 mb-2">10+</p>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Projetos Concluídos
              </h4>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm  hover:shadow-lg transition-shadow duration-300">
              <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Tecnologias
              </h4>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Dedicação
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
