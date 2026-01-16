import { motion, useAnimationControls } from 'motion/react';
import { useEffect } from 'react';

function Plate({ title, description, svg }) {
  const controls = useAnimationControls();

  const handleHoverStart = () => {
    controls.start({ opacity: 1, transition: { duration: 0.2 } });
  };

  const handleHoverEnd = () => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  };

  useEffect(() => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  }, [controls]);

  return (
    <motion.article
      className='styled-container h-40'
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}>
      <img src={svg} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}

export default Plate;
