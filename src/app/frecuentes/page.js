'use client';
import React from "react";
import Pregunta from "../components/frecuentes/pregunta";

const faqs = [
  { question: '¿Como comprar en la tienda?', answer: 'Esto esto y esto y aquello' },
  { question: '¿Que metodos de pago aceptan?', answer: 'Estos' },
  // ... más preguntas y respuestas
];

const Frecuentes= () => (
  <div>
    <hr></hr>
    <h1 className="text-3xl font-serif mb-2 text-center text-blue-500">Preguntas Frecuentes</h1>
    <hr></hr>
    <Pregunta  faqs={faqs} />
  </div>
);

export default Frecuentes;
