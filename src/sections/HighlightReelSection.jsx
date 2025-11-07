import { useState } from 'react';
import { highlightSlides } from '../data/highlights.js';
import filmFrame from '../assets/Group 11.png';
import cameraSketch from '../assets/Vector 5.svg';

export default function HighlightReelSection() {
  const [index, setIndex] = useState(0);
  const slide = highlightSlides[index];

  const go = (direction) => {
    setIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return highlightSlides.length - 1;
      if (next >= highlightSlides.length) return 0;
      return next;
    });
  };

  return (
    <section className="highlight" id="highlight">
      <div className="container highlight-inner">
        <img className="highlight-sketch" src={cameraSketch} alt="Camera sketch" />
        <div className="highlight-copy">
          <h2>The Highlight Reel</h2>
          <p>Watch the magic we capture when stories meet craft.</p>
        </div>
        <div className="highlight-stage">
          <button type="button" className="highlight-nav prev" onClick={() => go(-1)} aria-label="Previous project">
            ‹
          </button>
          <div className="highlight-frame">
            <img className="highlight-film" src={filmFrame} alt="Film frame" />
            <img className="highlight-slide" src={slide.image} alt={slide.title} />
            <button type="button" className="highlight-play" aria-label="Play highlight">
              ▶
            </button>
          </div>
          <button type="button" className="highlight-nav next" onClick={() => go(1)} aria-label="Next project">
            ›
          </button>
        </div>
        <div className="highlight-caption">
          <strong>{slide.title}</strong>
          <p>{slide.description}</p>
        </div>
      </div>
    </section>
  );
}

