import { useState, useEffect } from 'react';
import Frame1 from '../../../src/assets/images/Frame 1.svg';
import Frame2 from '../../../src/assets/images/Frame 2.svg';
import Frame3 from '../../../src/assets/images/Frame 3.svg';
import TestimonialData from '../../data/testimonialData.json';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setFadeIn(true);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? TestimonialData.length - 1 : prevIndex - 1
      );
    }, 500); // Half of the transition duration
  };

  const handleNextClick = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Half of the transition duration
  };

  const testimonial = TestimonialData[currentIndex];

  return (
    <div className="testimonial-carousel">
      <div className={`testimonial-info ${fadeIn ? 'active' : ''}`}>
        <div className="text-area">
          <p className="quote">{testimonial.quote}</p>
          <div className="user-info">
            <p className="name">{testimonial.name}</p>
            <p className="role">{testimonial.role}</p>
          </div>
        </div>
        <div className="image-area">
          <img src={Frame1} alt="Frame 1" className="frame-1 " />
          <img src={Frame2} alt="Frame 2" className="frame-2 " />
          <img src={Frame3} alt="Frame 3" className="frame-3 animate" />
          <div
            style={{
              borderRadius: '4px 123px 4px 4px',
              backgroundImage: `url(${testimonial.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '420px',
              width: '420px',
              zIndex: '1',
            }}
          >
            {/* Optional additional content inside the div */}
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevClick}>←</button>
        <div className="carousel-indicators">
          {TestimonialData.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setFadeIn(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                }, 500);
              }}
            ></span>
          ))}
        </div>
        <button onClick={handleNextClick}>→</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
