import Section from '@/shared/Section';
import bgImage from '@/assets/bg-images/bg-footer.jpg';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';
import FormContainer from './FormContainer';

function Contact() {
  return (
    <Section id='join' bgIMG={bgImage} className='bg-cover'>
      <FormContainer>
        <ContactForm />
      </FormContainer>

      <SocialMedia />
    </Section>
  );
}

export default Contact;
