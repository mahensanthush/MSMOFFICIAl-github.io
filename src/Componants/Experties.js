import React, { useEffect } from 'react';
import styled from 'styled-components';

function Experties() {

  useEffect(() => {

    const linkElement = document.createElement('link');
    linkElement.href = 'https://fonts.cdnfonts.com/css/good-times-2';
    linkElement.rel = 'stylesheet';


    document.head.appendChild(linkElement);
  }, []);
  return (
    <ExpertiesContainer id='experties'>
      <Title>Experties</Title>
      <Underline />
      <SkillsTable>
        <SkillsColumn>
          <SkillBox>
            <h3>Python, JavaScript, C++</h3>
            <p>
              I have proficiency in Python, JavaScript, and C++ programming languages, enabling me to develop robust and efficient solutions.
            </p>
            <div className='skill' id='skill'>
              <div className='outer'>
                <div className='inner'>
                  <div id='number'>80%</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63" />
                      <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                  </defs>
                  <circle className='circle1' cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
              </div>
            </div>

          </SkillBox>
        </SkillsColumn>
        <SkillsColumn>
          <SkillBox>
            <h3>Flutter and Dart</h3>
            <p>
              I am skilled in Flutter and Dart, allowing me to create cross-platform mobile applications with a smooth and engaging user experience.
            </p>
            <div className='skill'>
              <div className='outer'>
                <div className='inner'>
                  <div id='number'>65%</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63" />
                      <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                  </defs>
                  <circle className='circle2' cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
              </div>

            </div>
          </SkillBox>
        </SkillsColumn>
        <SkillsColumn>
          <SkillBox>
            <h3>React Development</h3>
            <p>
              With expertise in React, I can build modern and scalable web applications, ensuring a seamless user interface and efficient data handling.
            </p>
            <div className='skill'>
              <div className='outer'>
                <div className='inner'>
                  <div id='number'>70%</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63" />
                      <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                  </defs>
                  <circle className='circle3' cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
              </div>

            </div>
          </SkillBox>
        </SkillsColumn>
      </SkillsTable>
    </ExpertiesContainer>
  );
}

const ExpertiesContainer = styled.div`
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 56px;
  text-align: center;
  font-family: 'Good Times Rg', sans-serif;
`;

const Underline = styled.div`
  width: 100%;
  height: 5px;
  background-color: #000;
  margin: 10px 0;
  margin-top: 0px;
  
`;

const SkillsTable = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; 
`;

const SkillsColumn = styled.div`
  
  flex: 1 1 30%; 
  padding: 0 10px;
  box-sizing: border-box;
`;

const SkillBox = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: transform 0.3s, color 0.3s, font-size 0.3s;

  &:hover {
    transform: translateY(-5px);
    color: black;
    cursor: pointer;
    font-size: 10%;

    h3 {
      color: gray;
      font-size: 36px; 
    }
  }

  h3 {
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

  .skill{
    
    position: relative;
    width: 160px;
    height: 160px;
    position: relative;
  }

  .outer{
    height: 140px;
    width: 140px;
    border-radius: 50%;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255,0.7);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner{
    height: 130px;
    width: 130px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0px rgba(255,255,255,1),
                 0.5px 0.5px 0px rgba(255,255,255,0.15),
                 0px 12px 10px -10px rgba(0,0,0,0.5);

    
  }

  #number{
  font-weight: 900px;
  font-size: 30px;
  color: #555;
  }

  .circle1{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 435;
    stroke-dashoffset: 435;
    animation: anim1 2s linear forwards
  }

  .circle2{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 435;
    stroke-dashoffset: 435;
    animation: anim2 2s linear forwards
  }

  .circle3{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 435;
    stroke-dashoffset: 435;
    animation: anim3 2s linear forwards
  }

  svg{
    position: absolute;
    top: 0;
    left: 0;
  }
  
  @keyframes anim1{
    100%{
      stroke-dashoffset: 87;
    }
  }

  @keyframes anim2{
    100%{
      stroke-dashoffset: 153;
    }
  }

  @keyframes anim3{
    100%{
      stroke-dashoffset: 131;
    }
  }




`;


export default Experties;
