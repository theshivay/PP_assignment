import { Link } from 'react-router-dom';
import mandala from '../assets/Hero Mandala.png';

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-graphic">
          <img src={mandala} alt="Mandala" className="hero-mandala" />
          <span className="hero-logo">VFilms</span>
        </div>
        <div className="hero-copy">
          <p className="headline-serif">Varnan is where stories find their voice and form.</p>
          <p className="hero-sub">
            Films ● Brands ● Art — Since 2009, V has been listening to journeys and crafting frames
            that honour them. Every collaboration begins with intention, patience, and trust.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/portfolio">
              Explore Stories
            </Link>
            <Link className="btn secondary" to="/contact">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

