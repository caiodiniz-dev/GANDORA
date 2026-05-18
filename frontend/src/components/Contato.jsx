import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construir a mensagem para o WhatsApp
    const mensagemWhatsApp = `Olá! Meu nome é ${formData.nome}. Email: ${formData.email}. Mensagem: ${formData.mensagem}`;

    // URL-encode a mensagem
    const mensagemEncoded = encodeURIComponent(mensagemWhatsApp);

    // Construir a URL do WhatsApp
    const whatsappURL = `https://wa.me/5519936180259?text=${mensagemEncoded}`;

    // Redirecionar para o WhatsApp
    window.location.href = whatsappURL;

    // Limpar o formulário
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-cera reveal">
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <aside className="col-span-12 md:col-span-4 reveal reveal-delay-0">
            <div className="sec-index mb-3">§ VI</div>
            <div className="font-display text-[32px] md:text-[40px] tracking-[0.08em] text-carvao">
              Entre em contato
            </div>
            <p className="mt-6 text-carvao-600 leading-[1.8]">
              Para encomendas, dúvidas ou apenas para conversar sobre velas e livros.
            </p>
          </aside>

          <div className="col-span-12 md:col-span-8 reveal reveal-delay-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block eyebrow mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="gd-input w-full"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block eyebrow mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="gd-input w-full"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block eyebrow mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="gd-input w-full resize-none"
                  placeholder="Conte-nos sobre seu interesse..."
                />
              </div>

              <button type="submit" className="gd-btn gd-btn--terracota">
                Enviar mensagem <Send size={14} strokeWidth={1.25} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}