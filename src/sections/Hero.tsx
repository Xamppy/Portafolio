"use client";

import ParticlesContainer from "@/components/ParticlesContainer";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service",
        "template",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        ""
      );
      setSubmitSuccess(true);
      reset();
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
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
          <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Contáctame</span>
          </button>
        </div>
      </div>
    </div>
    {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-serif">Envíame un mensaje</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-white/50 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="text-green-500 text-4xl mb-4">✓</div>
                    <p className="text-lg">¡Mensaje enviado con éxito!</p>
                    <p className="text-white/60 mt-2">Me pondré en contacto contigo pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                        Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", { required: "El nombre es obligatorio" })}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-sky-500 focus:border-sky-500"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message as React.ReactNode}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "El correo es obligatorio",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Correo electrónico inválido"
                          }
                        })}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-sky-500 focus:border-sky-500"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message as React.ReactNode}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message", { required: "El mensaje es obligatorio" })}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-sky-500 focus:border-sky-500"
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message as React.ReactNode}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium h-12 rounded-lg flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="inline-block h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : "Enviar mensaje"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
    </section>
  );
};
