import React,{useEffect} from 'react';
import styled from 'styled-components';

import linkedinIcon from './link.png';
import facebookIcon from './fb.png';
import instagramIcon from './insta.png';
import youtubeIcon from './yt.png';
import githubIcon from './github.png';

function SocialMedia() {
  const socialMediaLinks = [
    { name: 'LinkedIn', icon: linkedinIcon, link: 'https://www.linkedin.com/in/mahen-santhush-b1b87b267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Facebook', icon: facebookIcon, link: 'https://www.facebook.com/profile.php?id=100088685839958&mibextid=ZbWKwL' },
    { name: 'Instagram', icon: instagramIcon, link: 'https://www.instagram.com/invites/contact/?i=57uig1ak4fyc&utm_content=t67bj81' },
    { name: 'YouTube', icon: youtubeIcon, link: 'https://youtube.com/@msmstreams3665?si=7aUoaN4fFTZz5YdH' },
    { name: 'GitHub', icon: githubIcon, link: 'https://github.com/mahensanthush' },
  ];
  useEffect(() => {

    const linkElement = document.createElement('link');
    linkElement.href = 'https://fonts.cdnfonts.com/css/good-times-2';
    linkElement.rel = 'stylesheet';


    document.head.appendChild(linkElement);
  }, []);
  

  return (
    <div>
         <Title>Contact Me</Title>
      <Underline />
       <SocialMediaContainer id='socielmedia'>
       
      {socialMediaLinks.map(({ name, icon, link }) => (
        <SocialMediaLink key={name} href={link} target="_blank" rel="noopener noreferrer">
          <MediaIcon src={icon} alt={name} />
          <MediaName>{name}</MediaName>
        </SocialMediaLink>
      ))}
    </SocialMediaContainer> 
    </div>

    
  );
}

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  height: 100px; 
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

const SocialMediaLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover {
    img {
      transform: scale(1.5); 
    }
    span {
      transform: scale(1.2); 
    }
  }
`;

const MediaIcon = styled.img`
  width: 48px;
  height: 48px; 
  transition: transform 0.3s;
`;

const MediaName = styled.span`
  font-size: 18px; 
  margin-top: 5px;
  transition: transform 0.3s;
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


export default SocialMedia;
