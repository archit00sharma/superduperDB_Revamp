import React, { ReactNode, useState } from 'react';
import Slider from 'react-slick';
import { animated, useSpring } from 'react-spring';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './slider.scss';

interface Slide {
  key: string;
  icon: ReactNode;
}

interface MySliderProps {
  slides: Slide[];
}

const MySlider: React.FC<MySliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const spring = useSpring({ opacity: 1 });

  const settings = {
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 8000,
    swipeToSlide: false,
    cssEase: 'linear',
    draggable: false,
    rtl: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (index: React.SetStateAction<number>) => setCurrentIndex(index),
    responsive: [
      {
        breakpoint: 568, // Adjust the screen width where the settings change
        settings: {
          speed: 3000,
          slidesToShow: 2.2, // Number of slides to show at this breakpoint
          slidesToScroll: 1, // Number of slides to scroll at this breakpoint
        },
      },
      {
        breakpoint: 768, // Adjust the screen width where the settings change
        settings: {
          speed: 4000,
          slidesToShow: 4, // Number of slides to show at this breakpoint
          slidesToScroll: 1, // Number of slides to scroll at this breakpoint
        },
      },
      {
        breakpoint: 1024,
        settings: {
          speed: 5000,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          speed: 5000,
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <animated.div
            className="slider__slide"
            key={slide.key}
            style={{
              ...spring,
              display: currentIndex === index ? 'block' : 'none',
            }}
          >
            {slide.icon}
          </animated.div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
