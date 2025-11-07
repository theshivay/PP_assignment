import filmImage from '../assets/Frame 31.png';
import brandingImage from '../assets/Branding.png';
import artImage from '../assets/Art Curation.png';

import iconFilm1 from '../assets/Camera 01.svg';
import iconFilm2 from '../assets/Camera 02.svg';
import iconFilm3 from '../assets/Camera 03.svg';
import iconFilm4 from '../assets/Camera 04.svg';

import iconBrand1 from '../assets/Branding Vector 01.svg';
import iconBrand2 from '../assets/Branding Vector 02.svg';
import iconBrand3 from '../assets/Branding Vector 03.svg';
import iconBrand4 from '../assets/Branding Vector 04.svg';

import iconArt1 from '../assets/Art Curation Icons 01.svg';
import iconArt2 from '../assets/Art Curation Icons 02.svg';
import iconArt3 from '../assets/Art Curation Icons 03.svg';
import iconArt4 from '../assets/Art Curation Icons 04.svg';

export const services = [
  {
    id: 'film',
    title: 'Film Production',
    quote: 'Filmmaking is a chance to live many lifetimes. – Robert Altman',
    description:
      'We treat each film as an immersive journey—capturing the heartbeat of stories that stay. From documentaries to 3D animation, we frame worlds that move audiences.',
    bullets: ['Documentaries', 'Corporate Films', '2D Animation', '3D Animation'],
    image: filmImage,
    icons: [iconFilm1, iconFilm2, iconFilm3, iconFilm4]
  },
  {
    id: 'brand',
    title: 'Branding',
    quote: 'A brand is a voice, and a product is a souvenir. – Lisa Gansky',
    description:
      'Branding is more than a logo—it is the memory people carry home. We craft immersive identities, guiding strategy, messaging, and design to grow with every audience touch point.',
    bullets: [
      'Brand Communication',
      'Market Mapping',
      'Content Management',
      'Social Media Strategy',
      'Rebranding'
    ],
    image: brandingImage,
    icons: [iconBrand1, iconBrand2, iconBrand3, iconBrand4]
  },
  {
    id: 'art',
    title: 'Art Curation',
    quote: 'We take art where it belongs, to the people. – Vernita Verma',
    description:
      'Art doesn’t live on distant walls. It travels, performs, and gathers people. We curate festivals and experiences that let stories breathe and communities feel.',
    bullets: ['Art Festivals', 'Live Experiences', 'Community Events', 'Cultural Storytelling'],
    image: artImage,
    icons: [iconArt1, iconArt2, iconArt3, iconArt4]
  }
];

