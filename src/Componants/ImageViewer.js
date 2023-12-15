
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


<style>
@import url('https://fonts.cdnfonts.com/css/league-spartan');
</style>



const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  
  padding-top: 80px;
  overflow-x: hidden;
  
  
  
`;

const Slider = styled.div`
  filter: blur(4px)  brightness(0.3);
  
  display: flex;
  width: 100%;
  
  margin-bottom: 0px;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  
  margin-bottom: 0px;
  box-sizing: border-box;
  
  
  img {
    width: 100%;
    height:80%;
    object-fit:cover; 
    
   
    
  }



`;



const ImageSlider = ({ images }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const updateSlider = () => {
    return {
      transform: `translateX(${-counter * 100}%)`,
    };
  };

  return (
    <SliderContainer>
      <Slider style={updateSlider()}>
        {images.map((imageUrl, index) => (
          <Slide key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </Slider>
      
      <ImageText> A Software Engineer's Odyssey in <span className='red'>CODE</span> and <span className='red'>CREATIVITY</span></ImageText>

    </SliderContainer>

  );
};

const ImageText = styled.div`
  position: absolute;
  top:39%;
  left: 34%;
  text-align:left;
  transform: translate(-50%, -50%);
  z-index: 2; 
  font-size: 600%;
  padding-top: 20px;
  color: white;
  font-weight: 700;
  font-family: 'League Spartan', sans-serif;
  line-height:120px;
  margin-top: 5%;

  .red{
    color: red;
  }

  @media (max-width: 768px) {
   
    font-size: 300%;
    line-height: 80px;
  }
`;
export default ImageSlider;
