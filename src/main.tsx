import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./pages/about.tsx";
import Home from "./pages/home.tsx";
import Contacts from "./pages/contacts.tsx";
import Projects from "./pages/projects.tsx";
import App from "./App.tsx";
import Experiences from "./pages/experiences.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experiences" element={<Experiences/>} />
    </Routes>
  </BrowserRouter>
);
