// importing components
import { useEffect, useState } from 'react';

// carousel view
const CarouselView = ({ sx, img }) => {
  return (
    <div className="carouselView">
      <img style={sx} src={img.url} alt={img.label} loading="lazy" />
    </div>
  );
};

// carousel
const Carousel = ({ imgs, autoplay, sx }) => {
  // states
  const [imgIdx, setImgIdx] = useState(0);

  const totalImages = imgs.length;

  useEffect(() => {
    const carouselInterval = 2000;

    if (autoplay) {
      const autoSlide = setInterval(() => {
        setImgIdx((prevIdx) => (prevIdx + 1) % totalImages);
      }, carouselInterval);

      return () => clearInterval(autoSlide);
    }
  }, [autoplay, totalImages]);

  return (
    <div className="carousel">
      <CarouselView sx={sx} img={imgs[imgIdx]} />
    </div>
  );
};

export default Carousel;
