import React, { useState, useEffect } from 'react';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import Slide from '../Slide';
import * as S from './style';

function Slider({ slides }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const [suspendAnimation, setSuspendAnimation] = useState(false);

  const slideCount = slides.length + 2;
  
  const lastSlide = slides.length - 1;

  const sliderWidth = slideCount * 100;

  const transformPercentage = (100 / slideCount).toFixed(2) * activeSlide;

  useEffect(() => {
    const snapToSlide = (index) => {
      setTimeout(() => {
        setSuspendAnimation(true);
        setActiveSlide(index);
        // the extra setTimeout here feels a little hacky, but seemed to need it to work properly. Was the best solution I could come up with considering time constraint.
        setTimeout(() => {
          setSuspendAnimation(false);
        }, 100);
      }, 500);
    };

    if (slides.length) {
      if (activeSlide === 0) snapToSlide(slides.length);
      if (activeSlide === slideCount - 1) snapToSlide(1);
    }

  }, [activeSlide, slideCount, slides]);

  return (
    <S.Wrapper>
      <S.Slider width={sliderWidth} transformPercentage={transformPercentage} suspendAnimation={suspendAnimation}>
        <Slide {...slides[lastSlide]} />
        {slides.map(slide => (
          <Slide {...slide} />
        ))}
        <Slide {...slides[0]} />
      </S.Slider>
      <S.Button onClick={() => setActiveSlide(activeSlide - 1)}><BsChevronLeft size={'2em'} color={'#fff'} /></S.Button>
      <S.Button onClick={() => setActiveSlide(activeSlide + 1)}><BsChevronRight size={'2em'} color={'#fff'} /></S.Button>
      <S.Dots>
        {slides.map((slide, index) => (
          <S.Dot onClick={() => setActiveSlide(index + 1)} />
        ))}
      </S.Dots>
    </S.Wrapper>
  )
}

export default Slider;