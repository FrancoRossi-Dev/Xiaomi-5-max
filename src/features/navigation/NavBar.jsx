import NavLink from './NavLink';
import Logo from '../../shared/Logo';
import ChangeTheme from '../../shared/ChangeTheme';
import Button from '../../shared/Button';

const navLinks = [
  {
    href: '#characteristics',
    text: 'Características',
  },
  {
    href: '#locations',
    text: 'Tiendas',
  },
  {
    href: '#testimonials',
    text: 'Opiniones',
  },
];

function NavBar() {
  function handleJoin() {
    document.getElementById('join')?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <header className='h-18 flex items-center justify-around fixed w-full top-0 z-50 bg-black/10 backdrop-blur-sm'>
      <a href='#' aria-label='Go back to the top'>
        <Logo cn={'h-8'} />
      </a>
      <ChangeTheme />
      <nav className='hidden md:block'>
        <ul className='flex space-x-4'>
          {navLinks.map((link) => {
            return (
              <li key={link.text} className='flex items-center'>
                <NavLink href={link.href} text={link.text} />
              </li>
            );
          })}
          <li>
            <Button onClick={handleJoin}>Unirme</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
