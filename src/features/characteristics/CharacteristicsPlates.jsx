import { motion } from 'motion/react';

import Plate from './Plate';
import svgSuspension from '@/assets/icons/icon-char-1.svg';
import svgRange from '@/assets/icons/icon-char-2.svg';
import svgMotor from '@/assets/icons/icon-char-3.svg';
import svgTCS from '@/assets/icons/icon-char-4.svg';
import svgEco from '@/assets/icons/icon-char-5.svg';
import svgLights from '@/assets/icons/icon-char-6.svg';
import characteristics_img from '@/assets/man-in-scooter.jpg';
import { delay } from 'motion';

const CHAR_COPY = {
  left: [
    {
      title: 'Suspensión Dual Avanzada',
      svg: svgSuspension,
      description:
        'Suspensión hidráulica delantera y doble resorte trasero para un andar más suave en todo tipo de terrenos.',
    },
    {
      title: 'Mayor Autonomía',
      svg: svgRange,
      description:
        'Recorre hasta 60 km sin recargar, reduciendo la frecuencia de carga y aumentando tu libertad.',
    },
    {
      title: 'Motor de 1000W',
      svg: svgMotor,
      description:
        'Aceleración potente y capacidad para subir pendientes de hasta 22% sin esfuerzo.',
    },
  ],
  right: [
    {
      title: 'Seguridad Antideslizante',
      svg: svgTCS,
      description:
        'El sistema TCS evita deslizamientos en superficies mojadas, brindando un viaje más seguro.',
    },
    {
      title: 'Conducción Inteligente',
      svg: svgEco,
      description:
        'Recuperación de energía y estacionamiento en pendiente para una experiencia más eficiente.',
    },
    {
      title: 'Iluminación Ambiental',
      svg: svgLights,
      description:
        'Luces LED que mejoran la visibilidad y seguridad durante la conducción nocturna.',
    },
  ],
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 0.8, ease: 'easeIn' },
  },
};

const platesR = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
  transition: { ease: 'easeIn' },
};

const platesL = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
  transition: { ease: 'easeIn' },
};

function CharacteristicsPlates() {
  return (
    <div className='[&>div]:flex [&>div]:gap-4 [&>div]:flex-col flex gap-6 items-center'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}>
        {CHAR_COPY.left.map((item, i) => (
          <motion.div variants={platesL} key={i + 'l'}>
            <Plate
              svgPosition='left'
              title={item.title}
              description={item.description}
              svg={item.svg}
            />
          </motion.div>
        ))}
      </motion.div>
      <figure className='max-w-80'>
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeIn' }}
          src={characteristics_img}
          className=''
          alt=''
        />
      </figure>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}>
        {CHAR_COPY.right.map((item, i) => (
          <motion.div variants={platesR} key={i + 'r'}>
            <Plate
              svgPosition='right'
              title={item.title}
              svg={item.svg}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CharacteristicsPlates;
