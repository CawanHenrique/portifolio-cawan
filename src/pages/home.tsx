import { ArrowRight, Mail } from "lucide-react";
import ParticlesComponent from "../components/ParticlesComponent.tsx";

// 1. Objeto de configuração para as partículas da Home (efeito "rede")
const particlesOptionsForHome = {
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
      value: 80,
      density: { enable: true, area: 800 },
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex justify-center items-center p-8">
      <ParticlesComponent id="home-particles" options={particlesOptionsForHome} />

      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xl text-blue-300">Olá, meu nome é</p>
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            Cawan Henrique
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300">
            Desenvolvedor Full-Stack
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
            Transformo ideias em soluções digitais criativas e eficientes.
            Apaixonado por tecnologia e por construir experiências que impactam
            positivamente a vida das pessoas.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              Meus Projetos
              <ArrowRight size={20} />
            </a>
            <a
              href="#contacts" 
              className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              Contato
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center relative">
          <img
            src="/profilePhoto.jpg"
            alt="Avatar estilizado de um desenvolvedor sorrindo com um círculo de neon azul e partículas ao fundo"
            className="w-96 h-96 object-cover rounded-full border-4 border-blue-700 shadow-xl shadow-blue-500/20 relative z-10"
          />
        </div>
      </div>
    </main>
  );
}