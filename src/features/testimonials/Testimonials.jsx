import Section from '@/shared/Section';
import TestimonialMarquee from './TestimonialMarquee';
import AnimatedHeader from '@/shared/animations/AnimatedHeader';

export default function Testimonials() {
  return (
    <Section id='testimonials' className='px-0' contentClassName='!max-w-full'>
      <AnimatedHeader
        title='OPINIONES'
        text='Estas son las experiencias de algunos de nuestros clientes'
      />
      <TestimonialMarquee />
    </Section>
  );
}
