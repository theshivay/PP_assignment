import mountain from '../assets/Group 10.png';

const stats = [
  { label: 'Projects', value: '85+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Experts Team', value: '10+' }
];

const brands = ['CocaCola', 'TED', 'Arton', 'Design Fra', 'Serve'];

export default function StatsSection() {
  return (
    <section className="stats" id="varnan">
      <div className="container stats-grid">
        <div className="stats-copy">
          <h2>A montage of familiar faces and names.</h2>
          <p>
            Some stories come from the biggest names, others begin with bold, rising voices. We listen,
            create, and build narratives that matter—together.
          </p>
        </div>
        <div className="stats-quote">
          <p>
            Every project is more than a brief—it&apos;s a new chapter waiting to be written. Together we
            craft tales that inspire, connect, and endure.
          </p>
          <div className="stats-brands">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
        <div className="stats-cards">
          {stats.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
        <img src={mountain} className="stats-illustration" alt="Mountain horizon illustration" />
      </div>
    </section>
  );
}

