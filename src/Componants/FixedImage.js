
import React from 'react';
import styled from 'styled-components';

const FixedImageContainer = styled.div`
display: flex;
  position: absolute;
  top: 68%;
  left: 20%;
  transform: translate(-50%, -50%);
  
`;

const RoundFrame = styled.div`
  width: 350px; 
  height: 350px;
  border-radius: 70%;
  overflow: hidden;
  border: 5px solid white;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

const FixedImage = ({ imageUrl }) => {
  return (
    <FixedImageContainer>
      <RoundFrame>
        <Image src={imageUrl} alt="Fixed Image" />
      </RoundFrame>
    </FixedImageContainer>
  );
};

export default FixedImage;
