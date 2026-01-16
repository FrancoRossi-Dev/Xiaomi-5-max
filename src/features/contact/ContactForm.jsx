import { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from '@/shared/Button';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: '',
    subscribeNewsletter: true,
  });

  const departments = [
    { value: 'montevideo', label: 'Montevideo' },
    { value: 'artigas', label: 'Artigas' },
    { value: 'canelones', label: 'Canelones' },
    { value: 'cerro_largo', label: 'Cerro Largo' },
    { value: 'colonia', label: 'Colonia' },
    { value: 'durazno', label: 'Durazno' },
    { value: 'flores', label: 'Flores' },
    { value: 'florida', label: 'Florida' },
    { value: 'lavalleja', label: 'Lavalleja' },
    { value: 'maldonado', label: 'Maldonado' },
    { value: 'paysandu', label: 'Paysandú' },
    { value: 'rio_negro', label: 'Río Negro' },
    { value: 'rivera', label: 'Rivera' },
    { value: 'rocha', label: 'Rocha' },
    { value: 'salto', label: 'Salto' },
    { value: 'san_jose', label: 'San José' },
    { value: 'soriano', label: 'Soriano' },
    { value: 'tacuarembo', label: 'Tacuarembó' },
    { value: 'treinta_y_tres', label: 'Treinta y Tres' },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  return (
    <>
      <h2>Contactanos</h2>
      <p className='mx-auto'>
        Unete a nuestro club para recibir promociones, participar de sorteos y obtener consejos para
        moverte de forma eficiente y segura por la ciudad.
      </p>
      <form onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-3 gap-4'>
        <div>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Dinos tu nombre'
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Mail</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='¿Cual es tu correo?'
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='department'>Departamento</label>
          <select
            id='department'
            name='department'
            value={form.department}
            onChange={handleChange}
            required>
            <option value='' disabled hidden>
              Selecciona un departamento...
            </option>
            {departments.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
        <div className='flex col-span-2 items-center gap-2'>
          <input
            type='checkbox'
            id='newsletter'
            name='subscribeNewsletter'
            checked={form.subscribeNewsletter}
            onChange={handleChange}
          />

          <label htmlFor='newsletter'>Quiero recibir novedades</label>
        </div>

        <Button id='submitForm' type='submit' value='Unirme' name='submit'>
          Unirme
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
