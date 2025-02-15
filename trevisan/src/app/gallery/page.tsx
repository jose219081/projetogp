"use client"; 
// Necessário no App Router para usar useState, useEffect etc. em componentes de página

import { useState } from "react";
import Image from "next/image";

interface ImageProps {
  thumb: string;
  full: string;
  alt: string;
}

const images: ImageProps[] = [
  {
    thumb: "/images/image.png",
    full: "/images/image-large.png",
    alt: "Ambiente aconchegante",
  },
  {
    thumb: "/images/image copy.png",
    full: "/images/image copy large.png",
    alt: "Churrasco suculento",
  },
  {
    thumb: "/images/image copy 2.png",
    full: "/images/image copy 2 large.png",
    alt: "Clientes satisfeitos",
  },
  {
    thumb: "/images/image copy 3.png",
    full: "/images/image copy 3 large.png",
    alt: "Espetinho na brasa",
  },
  {
    thumb: "/images/image copy 4.png",
    full: "/images/image copy 4 large.png",
    alt: "Ambiente familiar",
  },
  {
    thumb: "/images/image copy 5.png",
    full: "/images/image copy 5 large.png",
    alt: "Decoração charmosa",
  },
];

export default function Gallery() {
  // Estado para controlar a imagem selecionada
  const [selectedImg, setSelectedImg] = useState<string>("");
  const [selectedAlt, setSelectedAlt] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Abre o modal e define a imagem/alt selecionada
  const openModal = (full: string, alt: string) => {
    setSelectedImg(full);
    setSelectedAlt(alt);
    setIsModalOpen(true);
  };

  // Fecha o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImg("");
    setSelectedAlt("");
  };

  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Galeria de Fotos</h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
        Confira os melhores momentos e delícias do nosso churrasco!
      </p>

      {/* Grid de miniaturas */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openModal(img.full, img.alt)}
          >
            <Image
              src={img.thumb}
              alt={img.alt}
              width={400}
              height={300}
              className="object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modal da imagem em tamanho maior */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          {/* Botão de fechar */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Imagem grande */}
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImg}
              alt={selectedAlt}
              width={800}
              height={600}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
