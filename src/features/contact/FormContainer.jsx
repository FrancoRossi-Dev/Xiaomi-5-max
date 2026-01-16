import { motion } from 'motion/react';

function FormContainer({ children }) {
  return (
    <motion.div
      className='bg-black/50 p-8 mb-25 rounded-xl flex flex-col gap-4 justify-center'
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}>
      {children}
    </motion.div>
  );
}

export default FormContainer;
