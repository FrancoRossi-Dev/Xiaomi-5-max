import { motion } from 'motion/react';

const DATA_HEAD = ['Store', 'Contact', 'Direction'];
const DATA_BODY = [
  {
    store: 'Punta carretas',
    contact: '099 276 598',
    direction: '21 de Setiembre 2855 esq. Ellauri',
  },
  {
    store: 'Unión',
    contact: '092 725 825',
    direction: '8 de octubre 3616, esq Comercio',
  },
  {
    store: 'Centro',
    contact: '098 445 703',
    direction: '18 de Julio 1051, esq. Río Negro',
  },
  {
    store: 'Centro Roxlo',
    contact: '099 834 379',
    direction: 'Av. 18 de Julio 1604, esq. Carlos Roxlo',
  },
  {
    store: 'Tres cruces',
    contact: '092 289 084',
    direction: 'Tres Cruces Shopping, Nivel 1, Local k 108',
  },
  {
    store: 'Punta del este',
    contact: '098 036 032',
    direction: 'Punta Shopping, Nivel 3, Local 311',
  },
];

const table = {
  hidden: { opacity: 0, y: -40 },
  reveal: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeIn' },
  },
};

const tbody = {
  hidden: { opacity: 0 },
  reveal: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
  },
};

const row = {
  hidden: { opacity: 0, x: -20 },
  reveal: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function LocationTable() {
  return (
    <motion.table
      className='[&_*]:px-4 [&_*]:py-2 col-span-4 bg-neutral-950 rounded-2xl overflow-hidden border-4 border-accent'
      variants={table}
      initial='hidden'
      whileInView='reveal'
      viewport={{ once: true, amount: 0.3 }}>
      <thead>
        <tr className='bg-white text-bg text-left'>
          {DATA_HEAD.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>
      <motion.tbody
        variants={tbody}
        initial='hidden'
        whileInView='reveal'
        viewport={{ once: true, amount: 0.3 }}>
        {DATA_BODY.map((item) => (
          <motion.tr
            key={item.store}
            className='even:bg-neutral-800 hover:bg-neutral-700'
            variants={row}>
            <td className='font-bold'>{item.store}</td>
            <td>{item.contact}</td>
            <td>{item.direction}</td>
          </motion.tr>
        ))}
      </motion.tbody>
    </motion.table>
  );
}

export default LocationTable;
