import indiaGate from '../assets/Group 10.png';
import silhouettes from '../assets/image 6.png';

export default function AboutCollageSection() {
  return (
    <section className="about-collage" id="about">
      <div className="container about-grid">
        <div className="about-note">
          <span className="paperclip" aria-hidden="true">📎</span>
          <p>
            Some craft films. Some build brands. Some curate art. We bring it all together—a
            collective of storytellers driven by one belief: every project deserves to become a
            masterpiece.
          </p>
          <p>
            From first spark to final frame, from raw ideas to timeless visuals—we shape stories that
            travel with you.
          </p>
        </div>
        <div className="about-art">
          <img src={indiaGate} alt="Illustration of India Gate" className="about-monument" />
          <div className="about-captions">
            <span>Branding Experts</span>
            <span>Film Makers</span>
            <span>Art Curators</span>
          </div>
          <img src={silhouettes} alt="Creative collective silhouettes" className="about-crew" />
        </div>
        <div className="about-cta">
          <p>Take a closer look at the stories we bring to life.</p>
          <a className="btn" href="/portfolio">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}

