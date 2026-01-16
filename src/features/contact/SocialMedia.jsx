import SocialLink from './SocialLink';
import SvgIg from '@/assets/icons/socials_ig.svg';
import SvgFb from '@/assets/icons/socials_fb.svg';
import SvgX from '@/assets/icons/socials_x.svg';

function SocialMedia() {
  const mediaLinks = [
    {
      svg: SvgIg,
      url: 'https://www.instagram.com/xiaomiuruguay/',
      label: 'Instagram',
    },
    {
      svg: SvgFb,
      url: 'https://www.facebook.com/XiaomiGlobal/',
      label: 'Facebook',
    },
    {
      svg: SvgX,
      url: 'https://x.com/Xiaomi',
      label: 'X',
    },
  ];

  return (
    <div>
      <p className='mx-auto my-4 font-bold text-center'>Siguienos en nuestras redes sociales:</p>
      <div className='flex justify-center gap-8'>
        {mediaLinks.map((l) => (
          <SocialLink svg={l.svg} url={l.url} label={l.label} key={l.label} />
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;
