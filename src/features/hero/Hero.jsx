import Section from '../../shared/Section';
import Button from '../../shared/Button';

import x5MaxImage from '../../assets/x-5max.png';
import heroImage from '../../assets/bg-images/bg-hero.jpg';

function Hero() {
  function handleCTA() {
    alert('cta clicked');
  }

  return (
    <Section
      id='hero'
      bgIMG={heroImage}
      className='bg-cover h-dvh'
      contentClassName='group flex flex-col md:flex-row justify-center items-center cursor-pointer text-center'>
      <div
        className='pointer  **:transition-all **:duration-300 -mt-60 backdrop-blur-sm
                   shadow-[0_0_5px_5px_rgba(0,234,255,0.086)]
                   rounded-2xl p-8 space-y-4 max-w-100 bg-black/10 group:hover-bg-black/20'>
        <h1 className='group-hover:text-primary m-0'>Xiaomi 5 max</h1>
        <p>
          <span className='font-bold group-hover:text-primary'>
            Explora nuevos destinos con total libertad:
          </span>
          llega más lejos, con una suavidad incomparable y el respaldo de una tecnología pensada
          para acompañarte en cada kilómetro.
        </p>
        <Button onClick={handleCTA} id='cta'>
          Comenzar mi viaje
        </Button>
      </div>

      <img
        src={x5MaxImage}
        alt='Imagen del monotpatin eléctrico xiaomi 5 max'
        className='h-[90dvh] -md:h-[60dvh] lg:h-[90dvh] opacity-85 group-hover:opacity-100'
      />
    </Section>
  );
}

export default Hero;
