import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Detalhes from "./components/Detalhes";
import Ritual from "./components/Ritual";
import Colecoes from "./components/Colecoes";
import Processo from "./components/Processo";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Detalhes />
        <Ritual />
        <Colecoes />
        <Processo />
        <Contato />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
