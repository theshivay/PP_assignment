import { Link } from 'react-router-dom';
import { services } from '../data/services.js';
import arrowIcon from '../assets/Arrow.svg';

export default function ServiceFocusSection({ selectedIndex, onBack, heading }) {
  const activeServices =
    typeof selectedIndex === 'number' && services[selectedIndex]
      ? [services[selectedIndex]]
      : services;

  if (!activeServices.length) return null;

  return (
    <section className="service-focus" id="services">
      <div className="container service-stack">
        {heading && <h2 className="service-heading">{heading}</h2>}
        {onBack && (
          <button className="service-back" type="button" onClick={onBack}>
            <span aria-hidden="true">‹</span> Back
          </button>
        )}
        {activeServices.map((service) => (
          <article key={service.id} className="service-block">
            <p className="service-quote">{service.quote}</p>
            <div className="service-layout">
              <div className="service-preview">
                <div className="service-polaroid">
                  <img src={service.image} alt={service.title} />
                  <span>{service.title}</span>
                </div>
              </div>
              <div className="service-copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="service-explore" to="/contact">
                  Explore Now <img src={arrowIcon} alt="" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="service-icons" aria-hidden="true">
              {service.icons.map((icon, idx) => (
                <img key={icon} src={icon} alt="" className={`icon-${idx}`} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

