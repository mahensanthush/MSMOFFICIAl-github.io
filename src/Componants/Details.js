import React, { useEffect } from 'react'
import styled from 'styled-components'


function Details() {
  useEffect(() => {

    const linkElement = document.createElement('link');
    linkElement.href = 'https://fonts.cdnfonts.com/css/anurati';
    linkElement.rel = 'stylesheet';


    document.head.appendChild(linkElement);
  }, []);

  useEffect(() => {

    const linkElement = document.createElement('link');
    linkElement.href = 'https://fonts.cdnfonts.com/css/good-times-2';
    linkElement.rel = 'stylesheet';


    document.head.appendChild(linkElement);
  }, []);
  return (
    <Detailscontainer id='about'>
      <Title>About Me</Title>
      <Underline />

      <div className='box'>
        <h2><t>HI.</t>I'm Mahen Santhush.I'm a Computer Science Undergraduate at University Of Kelaniya.<pre />
          I am a passionate and dedicated professional with a background in computer science. As a forward-thinking individual, I thrive on the challenges of the digital landscape. With a strong foundation in software development and a keen eye for design, I bring creativity and technical expertise to every project. My commitment to continuous learning ensures that I stay at the forefront of emerging technologies. I am excited about the intersection of innovation and user experience, and I am eager to contribute my skills to create impactful and cutting-edge solutions.<pre /> Explore my portfolio to see how my diverse skill set and enthusiasm for technology come together to deliver results.<pre/>
        </h2>
      </div>




    </Detailscontainer>
  )
}
const Detailscontainer = styled.div`

  position: relative;
  
  padding-top: 30px;
  top: 0%;
  margin-top: 0px;
  margin-bottom: auto;
  z-index: 1;
  
  width: 100%;
  height: 100%;
  background-color :transparent ;

  h2{
    
    
  }


  .box {
  font-family: 'Anurati', sans-serif;

  font-size: 20px;
  width: 100%;
  width: auto;
  height: auto;
  padding: 4rem 6rem;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.375);
  box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.125);
  }

  t{
    font-size: 50px;
  }
`;
const Title = styled.h2`
  font-size: 56px;
  text-align: center;
  padding-bottom: 0px;
  font-family: 'Good Times Rg', sans-serif;

`;

const Underline = styled.div`
  width: 100%;
  padding-top: 0px;
  height: 5px;
  background-color: #000;
  margin: 10px 0;
`;

export default Details
