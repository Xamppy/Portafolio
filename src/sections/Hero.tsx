import ParticlesContainer from "@/components/ParticlesContainer";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  return (
    <section id="hero">
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div 
          className="absolute inset-0 -z-30 opacity-5 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
          style={{ backgroundImage: `url(${grainImage.src})`, }}>
        </div>
        <div className="size-[640px] hero-ring"></div>
        <div className="size-[840px] hero-ring"></div>
        <div className="size-[1040px] hero-ring"></div>
        <div className="size-[1240px] hero-ring"></div>
        <ParticlesContainer id="particles-container" />
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="Persona con un notebook" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Disponible para nuevos proyectos</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
          Transforma ideas en{" "}
          <span className="text-sky-600">Soluciones Digitales</span>
        </h1>
        <p className="mt-4 text-white/60 text-center md:text-lg">
          ¡Hola soy Felipe! 👋 Y soy un programador,
          actualmente estoy cursando la carrera de Ingeniería en Informática en 6to semestre.<br></br> Me
          apasiona el crear sitios web y aplicaciones, dando enfoque en una buena experiencia de uso y una buena interfaz.
        </p>
      </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a 
          href="#proyectos" 
          className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl backdrop-blur"
          >
          <span className="font-semibold">Explora mi trabajo</span>
          <ArrowDown className="size-4"/>
          </a>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Contáctame</span>
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};
