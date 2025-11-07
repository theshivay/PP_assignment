import { useState, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoUrl from '../assets/VFilms Logo.png';
import menuIcon from '../assets/open_nav.png';
import closeIcon from '../assets/close_nav.png';

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Their Story', to: '/portfolio' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Varnan', to: '/varnan' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuToggleIcon = useMemo(() => (open ? closeIcon : menuIcon), [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-shell" data-open={open}>
      <div className="container nav-inner">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <img src={logoUrl} alt="VFilms" />
          <span className="sr-only">VFilms</span>
        </Link>
        <nav className="nav-links" data-visible={open}>
          {NAV_LINKS.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to="/contact" onClick={closeMenu}>
            Let's Talk
          </NavLink>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src={menuToggleIcon} alt="Toggle navigation" />
        </button>
      </div>
    </header>
  );
}

