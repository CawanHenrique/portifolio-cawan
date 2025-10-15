import { ArrowUpRight, Github, Lock } from "lucide-react";
import ParticlesComponent from "../components/ParticlesComponent.tsx";

const projectsData = [
  {
    title: "Granks.io",
    description:
      "Protótipo de uma plataforma de adivinhar o ranking de jogadores em jogos multiplayer.",
    image: "granks.png",
    tags: ["ReactJS", "TailwindCSS", "Laravel", "PHP", "MySQL"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "CSV Importer",
    description:
      "CRUD de importação de arquivos CSV com validação e armazenamento em banco de dados, desenvolvido voltado para performance e usabilidade.",
    image: "csvimporter.png",
    tags: ["VueJS", "Laravel", "PHP", "MySQL"],
    liveUrl: "https://github.com/CawanHenrique/csv-importer",
    githubUrl: "https://github.com/CawanHenrique/csv-importer",
  },
  {
    title: "Aldeia Zen",
    description:
      "Aplicação completa que permite gerenciar reservas, clientes e serviços de um spa. Inclui funcionalidades como CRUDs, autenticação, financeiro e painel administrativo.",
    image: "aldeia.png",
    tags: [
      "TypeScript",
      "ReactJS",
      "TailwindCSS",
      "Laravel",
      "PHP",
      "MySQL",
      "NodeJS",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Estoque App",
    description:
      "Protótipo de sistema de controle de estoque com funcionalidades de CRUD, autenticação e painel administrativo.",
    image: "estoqueApp.png",
    tags: ["TypeScript", "ReactJS", "TailwindCSS", "Laravel", "PHP", "MySQL"],
    liveUrl: "https://github.com/CawanHenrique/EstoqueApp",
    githubUrl: "https://github.com/CawanHenrique/EstoqueApp",
  },
  {
    title: "Cálculo de IMC",
    description:
      "Projeto simples que calcula o Índice de Massa Corporal (IMC) com base na altura e peso fornecidos pelo usuário.",
    image: "calculoimc.png",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://cawanhenrique.github.io/desafiocalculoimc/",
    githubUrl: "https://github.com/CawanHenrique/desafiocalculoimc",
  },
];

const particlesOptionsForProjects = {
  fullScreen: { enable: false },
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#60a5fa" },
    links: {
      color: "#60a5fa",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
    },
    number: {
      value: 50,
      density: { enable: true, area: 800 },
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

export default function Projects() {
  return (
    <main
      id="projects"
      className="w-full h-full overflow-hidden bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 aboslute "
    >
      <ParticlesComponent
        id="projects-particles"
        options={particlesOptionsForProjects}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Projetos</h2>
          <p className="text-gray-400">
            Uma seleção dos meus trabalhos mais recentes.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 flex-grow mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-900 text-blue-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Ver Projeto <ArrowUpRight size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={28} />
                    </a>
                  )}
                  {!project.liveUrl && (
                    <span className="inline-flex items-center text-sm font-medium text-red-400">
                      <Lock size={16} className="mr-2" />
                      Acesso restrito
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
