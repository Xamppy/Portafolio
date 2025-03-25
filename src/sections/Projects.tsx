
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { section } from "framer-motion/client";

const portfolioProjects = [
  {
    company: "Ionic - Angular - Firebase",
    year: "2024",
    title: "DocuGest",
    results: [
      { title: "Gestor de documentos con ubicación" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Figma - Adobe XD",
    year: "2024",
    title: "Diseños web y móviles",
    results: [
      { title: "Distintos diseños realizados durante el año" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "HTML - CSS - JS",
    year: "2024",
    title: "Gestor de Documentos",
    results: [
      { title: "Desarrollo de gestor de documentos para departamento de Duoc UC" },
      { title: "Integración de equipo de trabajo" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos">
    <div className="container">
      <div className="text-center mb-12">
        <p className="font-serif text-3xl md:text-5xl text-center mt-1 tracking-wide">Proyectos destacados</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioProjects.map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${
              index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
            }`}
          >
            <img
              src={project.image.src}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.company} · {project.year}
              </p>
              <ul className="text-gray-200 mb-4">
                {project.results.map((result, i) => (
                  <li key={i} className="mb-1">
                    {result.title}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline hover:text-blue-400"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};