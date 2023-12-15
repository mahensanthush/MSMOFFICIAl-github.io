import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import TopNav from '../TopNav';
import Footer from '../Footer';
import AnimatedBackground from '../Background';
import ImageSlider from '../ImageViewer';
import Details from '../Details';
import LoadingScreen from '../LoadingScreen';
import Experties from '../Experties';
import SocielMedia from '../SocielMedia';
import Project from '../Project';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SlideInContainer = styled.div`
  animation: ${slideIn} 1s ease-in-out;
`;

const HomeContainer = styled.div``;

function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.href = 'https://fonts.cdnfonts.com/css/marske';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);
  }, []);

  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.href = 'https://fonts.cdnfonts.com/css/blanka';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);
  }, []);

  const images = [
    require('../01.jpg'),
    require('../02.jpg'),
    require('../03.jpg')
  ];

  return (
    <HomeContainer>
      {loading ? (
        <LoadingScreen />
      ) : (
        <AnimatedBackground>
          <TopNav />
          <SlideInContainer>
            <ImageSlider images={images} />
           
            <Details />
            <Experties/>
            <Project/>
            <Text2 className='p2'>"Creativity is intelligence having fun. Let your work be a testament to the joy of thoughtful innovation and the artistry of strategic brilliance."<pre/></Text2>
            
            <SocielMedia/>
          </SlideInContainer>
          <Footer />
        </AnimatedBackground>
      )}
    </HomeContainer>
  );
}

const Text2 = styled.div`
  font-size: 108px;
  font-weight: 500;
  padding: 10px;
  z-index: 1;
  font-family: 'Marske', sans-serif;
`;



export default Home;
