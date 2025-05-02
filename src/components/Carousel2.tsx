import { useState } from 'react';
import '../styles/carousel.scss'; // Import the CSS file

interface Slide {
  src: string;
  caption: string;
}

const slides: Slide[] = [
  { src: '../images/ali.avif', caption: '1 / 3' },
  { src: '../images/jason.avif', caption: '2 / 3' },
  { src: '../images/mateus.avif', caption: '3 / 3' },
  { src: '../images/LOGO.svg', caption: '4 / 3' },
];

export default function Carousel2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentIndex ? 'active' : ''}`}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        >
          <img src={slide.src} style={{ width: '100%' }} alt={`Slide ${index + 1}`} />
          <div className="text">{slide.caption}</div>
        </div>
      ))}
      <a className="prev" onClick={prevSlide}>
        ❮
      </a>
      <a className="next" onClick={nextSlide}>
        ❯
      </a>
    </div>
  );
}
