import vectorLeft from '../assets/Footer Vector.png';
import vectorRight from '../assets/Footer Vector-2.png';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-title">Join the Story</span>
          <p>
            Whether you have an idea or simply want to explore how we can craft together, V is a
            message away. Let&apos;s catch up over coffee.
          </p>
        </div>
        <div className="footer-meta">
          <a href="mailto:vernita@varnanfilms.co.in">vernita@varnanfilms.co.in</a>
          <a href="tel:+919873684567">+91 98736 84567</a>
        </div>
      </div>
      <img className="footer-art left" src={vectorLeft} alt="Decorative motif" />
      <img className="footer-art right" src={vectorRight} alt="Decorative motif" />
      <div className="footer-bottom">© {new Date().getFullYear()} VFilms. Films ● Brands ● Art</div>
    </footer>
  );
}

