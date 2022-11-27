import { FC, useEffect, useState, useRef } from 'react';

interface Props {
  className?: string;
  slides: any;
  delay?: number;
}

const slideAnimation = [
  { transform: 'translateX(238px)', opacity: 0 },
  { transform: 'translateX(-50px)', opacity: 1 },
  { transform: 'translateX(0)' },
  { transform: 'translateX(0)' },
  { transform: 'translateX(50px)', opacity: 1 },
  { transform: 'translateX(-238px)', opacity: 0 },
];

const FeaturesSlider: FC<Props> = ({ slides, delay = 2000 }) => {
  const starterSlide = 0;
  const [index, setIndex] = useState(starterSlide);
  const [slide, setSlide] = useState(slides[starterSlide]);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef?.current) {
        sliderRef.current.animate(slideAnimation, {
          duration: delay,
          iterations: Infinity,
          easing: 'linear',
        });
      }

      if (index < slides.length - 1) {
        setIndex(index + 1);
        setSlide(slides[index + 1]);
      } else {
        setIndex(0);
        setSlide(slides[0]);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [delay, index, slide, slides, slides.length]);

  return (
    <div className='slider'>
      <div className='card-feature'>
        <div className='item-container' ref={sliderRef}>
          <div className='item'>
            {slide.icon}
            <p>{slide.description}</p>
          </div>
          <span className={`badge ${slide.badge}`}>
            <span className={slide.badge}>{slide.badge?.toUpperCase()}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlider;
