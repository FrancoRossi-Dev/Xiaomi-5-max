function Testimonial({ userName, testimonial, pfpUrl }) {
  const altText = `Fotografía de ${userName}`;

  return (
    <figure className='styled-container flex-col !px-4 !py-8 min-w-100'>
      <img
        src={pfpUrl}
        alt={altText}
        className='w-35 h3-35 object-cover !rounded-full border-2 border-primary'
      />
      <blockquote>
        <p className='px-4'>{testimonial}</p>
      </blockquote>

      <figcaption className='grid w-full px-4 text-right'>
        <cite>- {userName}</cite>
      </figcaption>
    </figure>
  );
}

export default Testimonial;
