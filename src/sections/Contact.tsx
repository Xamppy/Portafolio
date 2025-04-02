"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection = () => {
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
  <section id="contacto" className="py-8">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-300 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div className="absolute inset-0 opacity-5 -z-10" style={{
              backgroundImage: `url(${grainImage.src})`,
            }}></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
              <h2 className="font-serif text-2xl md:text-3xl">Vamos a crear algo juntos</h2>
              <p className="text-sm md:text-base mt-2">¿Quieres expandirte con una tienda online? ¿Quieres dar a conocer algún servicio? ¿Necesitas alguna aplicación para hacer tu vida más facil? Contactame y hablemos sobre ello, te ayudo a cumplir con tus metas y objetivos en tu negocio.</p>
              </div>
          <button onClick={() => setIsModalOpen(true)} className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 border border-gray-900">
          <span className="font-semibold">Contáctame</span>
          <ArrowUpRightIcon className="size-4"/>
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
