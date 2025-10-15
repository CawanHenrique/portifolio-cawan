import { useState } from "react";

export default function AppNavBar() {
  // 1. Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link (útil em mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-neutral-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900 ">
          <a href="#home" onClick={handleLinkClick}>Cawan Dev</a>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
          <a href="#home"  className="relative hover:text-blue-700 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-blue-950 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full" >Início</a>
          <a href="#about"  className="relative hover:text-blue-700 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-blue-950 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full">Sobre</a>
          <a href="#experiences"  className="relative hover:text-blue-700 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-blue-950 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full">Experiências</a>
          <a href="#projects"  className="relative hover:text-blue-700 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-blue-950 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full ">Projetos</a>
          <a href="#contacts"  className="relative hover:text-blue-700 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-blue-950 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full ">Contato</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-50 shadow-md">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a href="#home" onClick={handleLinkClick} className="hover:text-blue-700">Início</a>
            <a href="#about" onClick={handleLinkClick} className="hover:text-blue-700">Sobre</a>
            <a href="#experiences" onClick={handleLinkClick} className="hover:text-blue-700">Experiências</a>
            <a href="#projects" onClick={handleLinkClick} className="hover:text-blue-700">Projetos</a>
            <a href="#contacts" onClick={handleLinkClick} className="hover:text-blue-700">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
}