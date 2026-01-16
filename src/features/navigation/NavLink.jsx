import PropTypes from 'prop-types';

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function NavLink({ href, text }) {
  return <a href={href}>{text}</a>;
}

export default NavLink;
