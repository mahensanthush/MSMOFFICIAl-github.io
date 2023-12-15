
import React from 'react';
import styled, { keyframes } from 'styled-components';


const AnimatedBackground = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  overflow-y: auto;
  height: 100%;
  color: #ffffff;
  background: linear-gradient(45deg, #333333,#111111  , #444444,#222222);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s linear infinite;
`;



export default AnimatedBackground;
