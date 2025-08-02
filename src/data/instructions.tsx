import { ReactNode } from 'react';
import img1 from '@/assets/intro_slide_1.png';
import img2 from '@/assets/intro_slide_2.png';
import img3 from '@/assets/intro_slide_3.png'

export type InstructionSlide = {
  title: string;
  content: ReactNode;
  imgPath: string 
};

export const instructionsSlides: InstructionSlide[] = [
  {
    title: 'Escucha, Morty, esto es importante, así que presta atención por una vez...',
    content: (
      <>
        Las cartas serán barajadas al comenzar. <br />
        <i>No preguntes cómo, es ciencia de verdad.</i> <br />
        ⏱️Se mostrarán por <strong>3 segundos</strong> y luego ¡BOOM! se dan vuelta. <br/>
        <i>¡Memorízalas, Morty, como si tu vida dependiera de ello!</i>
      </>
    ),
    imgPath: img1

  },
  {
    title: 'Turno tras turno',
    content: (
      <>
        Selecciona<strong> dos cartas.</strong> Solo dos, ¿sí?.<br/>
        ✅ Si <strong>coinciden</strong>, se mostrarán 1 segundo y desaparecerán. <br />
        ❌ Si <strong>no coinciden</strong>, se ocultan otra vez. <br />
        ¡Y cada intento cuenta como un turno! No malgastes tus clicks Morty!.
      </>
    ),
    imgPath: img2
  },
  {
    title: '¡Lo lograste... tal vez!',
    content: (
      <>
        Cuando aciertes todos los pares el juego <strong>detiene el tiempo</strong> (literalmente) y te dice <strong>cuántos turnos usaste</strong>.
        <br/>
        <em>¿Vas a jugar o solo viniste a leer, Morty?</em>

      </>
    ),
    imgPath: img3
  },
];
