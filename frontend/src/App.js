import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Colecoes from "./components/Colecoes";
import Aromas from "./components/Aromas";
import Ritual from "./components/Ritual";
import Sobre from "./components/Sobre";
import Newsletter from "./components/Newsletter";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  // smooth-scrolling correction for anchors with offset header
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="app-shell" data-testid="gandora-app">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Colecoes />
        <Aromas />
        <Ritual />
        <Sobre />
        <Newsletter />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
