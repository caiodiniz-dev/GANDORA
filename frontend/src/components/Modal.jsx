import React, { useState } from "react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-carvao/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-cera max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-deep rounded-none border border-[rgba(51,51,51,0.14)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-carvao hover:text-terracota transition-colors"
          aria-label="Fechar modal"
        >
          <X size={20} strokeWidth={1.25} />
        </button>
        <div className="p-8 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}