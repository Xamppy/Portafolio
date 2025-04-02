'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Dialog } from '@/components/Dialog';
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ui1 from "@/assets/images/ui1.png";
import ui2 from "@/assets/images/ui2.png";
import ui3 from "@/assets/images/ui3.png";
import ui4 from "@/assets/images/ui4.png";
import ui5 from "@/assets/images/ui5.png";
import ui6 from "@/assets/images/ui6.png";
import ui7 from "@/assets/images/ui7.png";
import ui8 from "@/assets/images/ui8.png";
import ui9 from "@/assets/images/ui9.png";

type Project = {
  id: string;
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link?: string;
  image: StaticImageData;
  type: string;
  modalContent: {
    images: string[];
    description: string;
  };
};

const portfolioProjects: Project[] = [
  {
    id: 'docugest',
    company: "Ionic - Angular - Firebase",
    year: "2024",
    title: "DocuGest",
    results: [
      { title: "Gestor de documentos con ubicación" },
    ],
    link: "https://www.amazon.es/Felipe-Orellana-DocsApp/dp/B0DPF2FHB1",
    image: darkSaasLandingPage,
    type: "mobile",
    // Nuevas propiedades para el modal
    modalContent: {
      images: [
        "/designs/docugest-1.jpg",
        "/designs/docugest-2.jpg",
        "/designs/docugest-3.jpg"
      ],
      description: "Aplicación móvil para gestión documental con geolocalización y categorización inteligente. Desarrollada con Ionic Framework y Firebase."
    }
  },
  {
    id: 'disenos',
    company: "Figma - Adobe XD",
    year: "2024",
    title: "Diseños UI/UX",
    results: [
      { title: "Diseños realizados durante el año" },
    ],
    image: lightSaasLandingPage,
    type: "design",
    modalContent: {
      images: [
        ui1.src,
        ui2.src,
        ui3.src,
        ui4.src,
        ui5.src,
        ui6.src,
        ui7.src,
        ui8.src,
        ui9.src
      ],
      description: "Colección de diseños de interfaces de usuario creados en Figma, incluyendo sistemas de diseño, prototipos interactivos y wireframes."
    }
  },
  {
    id: 'gestor-documentos',
    company: "HTML - CSS - JS",
    year: "2024",
    title: "Gestor de Documentos",
    results: [
      { title: "Para departamento de Duoc UC" },
      { title: "Integración de equipo" },
    ],
    image: aiStartupLandingPage,
    type: "web",
    modalContent: {
      images: [
        "/designs/gestor-1.jpg",
        "/designs/gestor-2.jpg"
      ],
      description: "Sistema web para gestión documental con autenticación por roles y flujos de trabajo colaborativo."
    }
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-center tracking-wide">
            Proyectos destacados
          </h2>
        </div>

        {/* Contenedor Bento Grid - Versión mejorada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                relative rounded-xl shadow-lg overflow-hidden
                transition-all duration-300 hover:scale-[1.02]
                ${index === 0 ? 
                  "md:col-span-2 md:row-span-2 h-[300px] md:h-full" :  // Altura reducida en mobile
                  "md:col-span-1 h-[300px] md:h-full pb-6 sm:pb-0"     // Misma altura y padding inferior
                }
              `}
              onClick={(e) => {
                // Solo abre modal en desktop (no en mobile)
                if (window.innerWidth >= 768 && index !== 0) {
                  setSelectedProject(project);
                }
              }}
            >
              {/* Imagen de fondo */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>

              {/* Overlay con contenido */}
              <div className={`
                absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                flex flex-col justify-end p-6 opacity-0 hover:opacity-100
                transition-opacity duration-300
              `}>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2 md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-2 text-sm">
                    {project.company} · {project.year}
                  </p>
                  
                  <ul className="space-y-1 text-gray-200 mb-4">
                    {project.results.map((result, i) => (
                      <li key={i} className="text-sm">• {result.title}</li>
                    ))}
                  </ul>

                  {index === 0 ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Ver en App Store
                    </a>
                  ) : (
                    <button 
                      className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      Ver Diseños
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
  <Dialog onClose={() => setSelectedProject(null)}>
    <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto p-6">
      <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Carrusel de imágenes - Ocupa 3/5 del espacio */}
        <div className="lg:col-span-3">
          <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
            {/* Contenedor del carrusel */}
            <div className="relative h-full w-full">
              {selectedProject.modalContent.images.map((img, i) => (
                <div 
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-300 ${i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <Image
                    src={img}
                    alt={`Diseño ${i+1} de ${selectedProject.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Controles del carrusel */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
              {selectedProject.modalContent.images.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${i === 0 ? 'bg-gray-800' : 'bg-gray-300'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Ocultar todas las imágenes
                    const images = document.querySelectorAll('.lg\\:col-span-3 .relative.h-full.w-full > div');
                    images.forEach(img => {
                      img.classList.remove('opacity-100', 'z-10');
                      img.classList.add('opacity-0', 'z-0');
                    });
                    
                    // Mostrar solo la imagen seleccionada
                    images[i].classList.remove('opacity-0', 'z-0');
                    images[i].classList.add('opacity-100', 'z-10');
                    
                    // Actualizar indicadores
                    document.querySelectorAll('.lg\\:col-span-3 .absolute.bottom-4 button').forEach((btn, idx) => {
                      btn.classList.toggle('bg-gray-800', idx === i);
                      btn.classList.toggle('bg-gray-300', idx !== i);
                    });
                  }}
                />
              ))}
            </div>
            
            {/* Flechas de navegación */}
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow z-20 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                const images = document.querySelectorAll('.lg\\:col-span-3 .relative.h-full.w-full > div');
                const currentIndex = Array.from(images).findIndex(
                  img => img.classList.contains('opacity-100')
                );
                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                
                // Ocultar todas
                images.forEach(img => {
                  img.classList.remove('opacity-100', 'z-10');
                  img.classList.add('opacity-0', 'z-0');
                });
                
                // Mostrar anterior
                images[prevIndex].classList.remove('opacity-0', 'z-0');
                images[prevIndex].classList.add('opacity-100', 'z-10');
                
                // Actualizar indicadores
                document.querySelectorAll('.lg\\:col-span-3 .absolute.bottom-4 button').forEach((btn, idx) => {
                  btn.classList.toggle('bg-gray-800', idx === prevIndex);
                  btn.classList.toggle('bg-gray-300', idx !== prevIndex);
                });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow z-20 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                const images = document.querySelectorAll('.lg\\:col-span-3 .relative.h-full.w-full > div');
                const currentIndex = Array.from(images).findIndex(
                  img => img.classList.contains('opacity-100')
                );
                const nextIndex = (currentIndex + 1) % images.length;
                
                // Ocultar todas
                images.forEach(img => {
                  img.classList.remove('opacity-100', 'z-10');
                  img.classList.add('opacity-0', 'z-0');
                });
                
                // Mostrar siguiente
                images[nextIndex].classList.remove('opacity-0', 'z-0');
                images[nextIndex].classList.add('opacity-100', 'z-10');
                
                // Actualizar indicadores
                document.querySelectorAll('.lg\\:col-span-3 .absolute.bottom-4 button').forEach((btn, idx) => {
                  btn.classList.toggle('bg-gray-800', idx === nextIndex);
                  btn.classList.toggle('bg-gray-300', idx !== nextIndex);
                });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Descripción - Ocupa 2/5 del espacio */}
        <div className="lg:col-span-2">
          <h4 className="text-lg font-semibold mb-2">Detalles del Proyecto</h4>
          <p className="text-gray-700 mb-6">{selectedProject.modalContent.description}</p>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Características:</h5>
            <ul className="list-disc pl-5 space-y-1">
              {selectedProject.results.map((result, i) => (
                <li key={i}>{result.title}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setSelectedProject(null)}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
)}
      </div>
    </section>
  );
};