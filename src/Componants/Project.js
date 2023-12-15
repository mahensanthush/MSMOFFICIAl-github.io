import React, { useEffect } from 'react';
import styled from 'styled-components';

import S01 from './s1.png';
import S02 from './s2.png';
import S03 from './s3.png';

const projects = [
  {
    title: 'Batman Game',
    image: S02,
    details: "Take a delightful stroll into a mini Batman adventure with the Python and Turtle-powered game. This charming creation embraces simplicity, offering players a fuss-free and enjoyable experience. As Batman, navigate through a pixelated world, collecting points and relishing the whimsical graphics brought to life by Turtle. The games straightforward design ensures accessibility for players of all ages. Python s coding magic and Turtle's graphics combine effortlessly, creating a playful escapade that's perfect for a quick and light-hearted gaming session. Dive into the joy of classic gaming simplicity and let Python and Turtle guide you through a delightful journey as the iconic Dark Knight.",
  },
 
  {
    title: 'Mflix Torrents',
    image: S03,
    details: 'Mflix Torrents is a cutting-edge Torrent site meticulously crafted using React. This platform provides a seamless and user-friendly experience, making it exceptionally easy for users to download their favorite movies. With a focus on efficiency and simplicity, Mflix Torrents stands out as a reliable source for accessing a vast collection of movies. The sites intuitive design ensures a hassle-free navigation experience, allowing users to explore and discover a wide range of films effortlessly. Dive into the world of entertainment with Mflix Torrents and enjoy a user-centric approach to movie downloading.',
  },
  {
    title: 'MSM Streams',
    image: S01,
    details: 'MSM Streams stands as an exciting haven for gaming enthusiasts on its YouTube channel. Specializing in video game content, MSM Streams delivers an immersive experience for viewers eager to explore the latest gaming titles, walkthroughs, and live gameplay sessions. The channel is led by passionate gamers who not only showcase their gaming skills but also provide insightful commentary and reviews. From thrilling adventures to in-depth discussions about the gaming industry, MSM Streams creates a vibrant community for gamers to connect and share their passion. Dive into the world of virtual adventures, discover new titles, and join the gaming community by subscribing to MSM Streams for an exciting journey through the gaming universe!',
  },
];

const ProjectContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    font-size: 30px;
  }
`;

const ProjectBox = styled.div`
  position: relative;
  display: flex;
  width: 80%; 
  height: 250px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  margin: 20px;
  text-align: left;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
    color: black;
    font-size: 10%;
  }
`;

const ProjectImage = styled.img`
  width: 250px; 
  height: 90%; 
  object-fit: cover;
  border-radius: 5px;
  margin-right: 20px; 
  transition: transform 0.3s;
`;

const ProjectDetails = styled.div`
  font-size: 16px;
  line-height: 1.5;
  text-align: left; 
  
`;

const Title = styled.h2`
  font-size: 56px;
  text-align: center;
  font-family: 'Good Times Rg', sans-serif;
  margin-bottom: 20px;
`;

const Underline = styled.div`
  width: 100%;
  height: 5px;
  background-color: #000;
  margin: 10px 0;
  margin-top: 0px;
`;

const Project = () => {
  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.href = 'https://fonts.cdnfonts.com/css/good-times-2';
    linkElement.rel = 'stylesheet';

    document.head.appendChild(linkElement);
  }, []);

  return (
    <ProjectContainer id='project'>
      <Title>Projects</Title>
      <Underline />
      {projects.map((project, index) => (
        <ProjectBox key={index}>
          <ProjectImage src={project.image} alt={project.title} />
          <div>
            <h3>{project.title}</h3>
            <ProjectDetails>{project.details}</ProjectDetails>
          </div>
        </ProjectBox>
      ))}
    </ProjectContainer>
  );
};

export default Project;
