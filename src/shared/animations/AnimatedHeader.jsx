import { motion } from 'motion/react';

function AnimatedHeader({ title, text }) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}>
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.3, ease: 'easeIn' }}>
        {text}
      </motion.p>
    </>
  );
}

export default AnimatedHeader;
