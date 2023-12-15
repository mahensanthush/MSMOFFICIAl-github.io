import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

function TopNav() {
    const navigate = useNavigate();

    useEffect(() => {
        const linkElement = document.createElement('link');
        linkElement.href = 'https://fonts.cdnfonts.com/css/anurati';
        linkElement.rel = 'stylesheet';
        document.head.appendChild(linkElement);
    }, []);

    const NavLinks = [
        { name: "Home", link: '/' },
        { name: "About", link: '/About' },
        { name: "Experties", link: '/Experties' },
        { name: "Projects", link: '/Project' },
        { name: "Contact Me", link: '/SocielMedia' },
    ];

    const handleScrollTo = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <NavContainers>
            <div className='leftside'>
                <div className='logo'>
                    <img
                        src='https://img.freepik.com/premium-vector/smg-monogram-logo_772242-21.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699574400&semt=ais'
                        alt='logo'
                    />
                </div>
                <ul className='links'>
                    {NavLinks.map(({ name, link }) => (
                        <li key={name}>
                            {link === '/Experties' || link === '/About' || link === '/SocielMedia'|| link==='/Project' ? (
                                <StyledSpan onClick={() => handleScrollTo(link.substring(1).toLowerCase())}>{name}</StyledSpan>
                            ) : (
                                <Link to={link}>{name}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </NavContainers>
    );
}


const NavContainers = styled.div`
    font-family: 'Anurati', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 10);
    color: white;
    padding: 10px 20px;
    z-index: 3;

    .leftside {
        display: flex;
        align-items: center;

        .logo {
            img {
                padding-top: 17px;
                width: 40px;
                height: auto;
            }
        }

        .links {
            list-style: none;
            display: flex;
            gap: 20px;

            li {
                a {
                    text-decoration: none;
                    color: white;
                    transition: color 0.3s ease-in-out;

                    &:hover {
                        color: #f39c12;
                    }
                }
            }
        }
    }
`;

const StyledSpan = styled.span`
  cursor: pointer;
  &:hover {
                        color: #f39c12;
                    }
`;

export default TopNav;
