import React, { useRef, useState } from 'react';
import Slider from 'react-slick'; // Make sure to install react-slick package

interface ListItem {
  title: string;
  content: string;
  image: string;
}

interface ToolkitSliderProps {
  listItems: ListItem[];
}

const ToolkitSlider: React.FC<ToolkitSliderProps> = ({ listItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const handleClickPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide(currentSlide => currentSlide - 1);
    }
  };

  const handleClickNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide(currentSlide => currentSlide + 1);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false // if you want to hide default arrows
  };

  return (
    <section className='toolkit-container'>
      <Slider {...settings} ref={sliderRef}>
        {listItems.map((item, index) => (
          <section key={index} className='toolkit-slider'>
            <div className='toolkit-text'>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
            <div className='toolkit-image'>
              <img src={item.image} alt="" />
            </div>
          </section>
        ))}
      </Slider>
      <div className='control-btn'>
        <div className='slider-button' onClick={handleClickPrev}>
          <img className='prev-btn' src="../../../../images/slide-control.svg" alt="" />
        </div>
        <div className='slide-number'>{currentSlide + 1}/{listItems.length}</div>
        <div className='slider-button' onClick={handleClickNext}>
          <img src="../../../../images/slide-control.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ToolkitSlider;
