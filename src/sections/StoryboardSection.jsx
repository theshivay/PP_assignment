import filmShot from '../assets/Frame 31.png';
import brandingShot from '../assets/Frame 31 2.png';
import artShot from '../assets/Frame 23.png';

const cards = [
  {
    id: 'card-film',
    title: 'Film Production',
    image: filmShot,
    description: 'Captured moments, cinematic craft.'
  },
  {
    id: 'card-brand',
    title: 'Branding',
    image: brandingShot,
    description: 'Stories that stay with your audience.'
  },
  {
    id: 'card-art',
    title: 'Art Curation',
    image: artShot,
    description: 'Experiences that travel with people.'
  }
];

export default function StoryboardSection({ onSelectService }) {
  return (
    <section className="storyboard" id="stories">
      <div className="container">
        <p className="storyboard-title">The storyboard reveals the breadth of our craft.</p>
        <div className="storyboard-line" aria-hidden="true" />
        <div className="storyboard-grid">
          {cards.map((card, idx) => (
            <article
              key={card.id}
              className={`storyboard-card position-${idx}`}
              onClick={onSelectService ? () => onSelectService(idx) : undefined}
              role={onSelectService ? 'button' : undefined}
              tabIndex={onSelectService ? 0 : undefined}
              onKeyDown={
                onSelectService
                  ? (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        onSelectService(idx);
                      }
                    }
                  : undefined
              }
            >
              <span className="storyboard-tape" aria-hidden="true" />
              <img src={card.image} alt={card.title} />
              <footer>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

