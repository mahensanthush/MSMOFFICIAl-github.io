import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #555; /* Gray background color */
`;

const zoomAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5); /* Zoom in */
  }
  100% {
    transform: scale(1); /* Zoom out */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${zoomAnimation} 2s infinite; /* Apply the zoom animation */
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: white;
`;

const LoadingScreen = () => (
  <LoadingContainer>
    <LogoContainer>
      {/* Replace the URL with the actual URL of the provided logo */}
      <Logo src="https://img.freepik.com/premium-vector/smg-monogram-logo_772242-21.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699574400&semt=ais" alt="Monogram Logo" />
      <Text>MSM OFFICIAL</Text>
    </LogoContainer>
  </LoadingContainer>
);

export default LoadingScreen;
