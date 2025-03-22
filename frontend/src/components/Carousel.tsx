/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = ({ 
  children: slides, 
  autoSlide = false, 
  autoslideInterval = 3000
}) => {
  const [curr, setCurr] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoslideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoslideInterval]);

  return (
    <div className='rounded-2xl overflow-hidden relative shadow-xl border border-white/30 bg-white'>
      <div 
        className='flex transition-transform ease-out duration-500' 
        style={{ transform: `translateX(-${curr * 100}%)`}}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>
      
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button 
          onClick={prev} 
          className='p-2 rounded-full shadow-md bg-white/80 text-clinic-primary hover:bg-white hover:text-clinic-accent transition-all duration-300 transform hover:scale-110'
          disabled={isAnimating}
        >
          <FaArrowLeft size={20} />
        </button>
        <button 
          onClick={next} 
          className='p-2 rounded-full shadow-md bg-white/80 text-clinic-primary hover:bg-white hover:text-clinic-accent transition-all duration-300 transform hover:scale-110'
          disabled={isAnimating}
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setCurr(i);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`transition-all w-2 h-2 rounded-full ${
                curr === i 
                  ? "w-4 bg-clinic-primary" 
                  : "bg-white/70 hover:bg-white"
              }`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;