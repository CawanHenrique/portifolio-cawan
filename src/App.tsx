// src/App.jsx

import "./App.css";
import AppNavBar from "./components/app-nav-bar";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experiences from "./pages/experiences";

function App() {
  return (
    <>
      <AppNavBar />
      <main>
        <section id="home" className="h-full flex items-center justify-center">
          <Home />
        </section>
        <section id="about" className="h-full flex items-center justify-center">
          <About />
        </section>
        <section id="experiences" className="h-full flex items-center justify-center">
          <Experiences />
        </section>
        <section id="projects" className="h-full flex items-center justify-center">
          <Projects />
        </section>
        <section id="contacts" className="h-full flex items-center justify-center">
          <Contacts />
        </section>
      </main>
    </>
  );
}

export default App;