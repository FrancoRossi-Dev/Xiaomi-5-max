export default function Section({
  id,
  className = '',
  contentClassName = '',
  bgIMG = null,
  children,
}) {
  const sectionClassName = `p-12 ${bgIMG ? 'bg-cover bg-center' : ''} ${className}`.trim();
  const sectionStyle = bgIMG ? { backgroundImage: `url(${bgIMG})` } : {};

  return (
    <section id={id} className={sectionClassName} style={sectionStyle}>
      <div className={`max-w-120 md:max-w-200 lg:max-w-310 m-auto mb-8 ${contentClassName} `}>
        {children}
      </div>
    </section>
  );
}
