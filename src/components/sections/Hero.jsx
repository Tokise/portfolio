import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import sideImage from '../../assets/pic.jpg';


const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  from { border-color: transparent }
  50% { border-color: var(--primary-color) }
  to { border-color: transparent }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const borderAnimation = keyframes`
  0% {
    border-color: var(--primary-color);
  }
  50% {
    border-color: var(--secondary-color);
  }
  100% {
    border-color: var(--primary-color);
  }
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px var(--primary-color),
                0 0 20px var(--primary-color),
                0 0 30px var(--primary-color);
  }
  50% {
    box-shadow: 0 0 20px var(--secondary-color),
                0 0 30px var(--secondary-color),
                0 0 40px var(--secondary-color);
  }
  100% {
    box-shadow: 0 0 10px var(--primary-color),
                0 0 20px var(--primary-color),
                0 0 30px var(--primary-color);
  }
`;

const rotateGlow = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 15px var(--primary-color),
                0 0 25px var(--primary-color),
                0 0 35px var(--primary-color);
    transform: translateY(-50%) scale(1);
  }
  50% {
    box-shadow: 0 0 25px var(--secondary-color),
                0 0 35px var(--secondary-color),
                0 0 45px var(--secondary-color);
    transform: translateY(-50%) scale(1.02);
  }
  100% {
    box-shadow: 0 0 15px var(--primary-color),
                0 0 25px var(--primary-color),
                0 0 35px var(--primary-color);
    transform: translateY(-50%) scale(1);
  }
`;

const borderGlow = keyframes`
  0% {
    border-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }
  50% {
    border-color: var(--secondary-color);
    box-shadow: 0 0 20px var(--secondary-color);
  }
  100% {
    border-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
  }
`;

const rotateGradient = keyframes`
  0% {
    border-image: linear-gradient(0deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end)) 1;
    box-shadow: 0 0 20px var(--gradient-start);
  }
  33% {
    border-image: linear-gradient(120deg, var(--gradient-mid), var(--gradient-end), var(--gradient-start)) 1;
    box-shadow: 0 0 20px var(--gradient-mid);
  }
  66% {
    border-image: linear-gradient(240deg, var(--gradient-end), var(--gradient-start), var(--gradient-mid)) 1;
    box-shadow: 0 0 20px var(--gradient-end);
  }
  100% {
    border-image: linear-gradient(360deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end)) 1;
    box-shadow: 0 0 20px var(--gradient-start);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 2rem 0;
  position: relative;
  overflow: hidden;
  background: var(--background-dark);
  width: 100%;

  @media (max-width: 768px) {
    padding: 120px 1rem 80px;
    justify-content: center;
    background: linear-gradient(
      rgba(15, 23, 42, 0.85),
      rgba(15, 23, 42, 0.85)
    ),
    url(${sideImage}) center/cover no-repeat;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--background-dark);
      opacity: 0.7;
      z-index: 0;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 8rem;
  transform: translateY(-50%);
  width: 350px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
  border: 3px solid;
  border-image: linear-gradient(45deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end)) 1;
  animation: ${rotateGradient} 8s linear infinite;
  transition: all 0.3s ease;
  background: var(--background-dark);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      var(--gradient-start),
      var(--gradient-mid),
      var(--gradient-end)
    );
    z-index: -1;
    filter: blur(10px);
    opacity: 0.5;
    animation: ${rotateGradient} 8s linear infinite;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px;
    transition: transform 0.5s ease;
    background: transparent;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover::before {
    opacity: 0.7;
    filter: blur(15px);
  }

  @media (max-width: 1200px) {
    right: 4rem;
    width: 300px;
    height: 350px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
  margin-left: 10rem;

  @media (max-width: 1200px) {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

const Greeting = styled.h2`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.6s ease forwards;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const NameWrapper = styled.div`
  height: 4.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    height: 2.5rem;
    margin-bottom: 1.5rem;
    width: 100%;
    text-align: center;
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  display: inline-block;
  border-right: 3px solid var(--primary-color);
  animation: 
    ${props => props.typing ? typewriter : ''} 2s steps(25, end) forwards,
    ${blink} 0.8s infinite;
  width: ${props => props.typing ? '0' : '100%'};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.div`
  margin-bottom: 2rem;
`;

const MainTitle = styled.h3`
  font-size: 2rem;
  color: var(--text-secondary);
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards 2.5s;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const SubTitle = styled.h4`
  font-size: 1.5rem;
  color: var(--primary-color);
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards 2.7s;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0.5rem 0 0 0;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text-primary);
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards 3s;
  max-width: 600px;

  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards 3.5s;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: var(--text-secondary);
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  opacity: 0.7;
  cursor: pointer;
  color: var(--text-primary);

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translate(-50%, 0);
    }
    40% {
      transform: translate(-50%, -10px);
    }
    60% {
      transform: translate(-50%, -5px);
    }
  }

  @media (max-width: 768px) {
    bottom: 4rem;
  }
`;

const Hero = () => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection id="home">
      <ImageContainer>
        <img src={sideImage} alt="Profile" />
      </ImageContainer>
      <HeroContent>
        <Greeting>Hello, I'm</Greeting>
        <NameWrapper>
          <Name typing={isTyping}>John Rey Ablen</Name>
        </NameWrapper>
        <Title>
          <MainTitle>IT Student</MainTitle>
          <SubTitle>2nd Year College Student</SubTitle>
        </Title>
        <SocialLinks>
          <SocialLink href="https://github.com/Tokise" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="https://www.facebook.com/jry.aln.06.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </SocialLink>
          <SocialLink href="https://www.instagram.com/rei.abn/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      <ScrollDown>
        <i className="fas fa-chevron-down"></i>
      </ScrollDown>
    </HeroSection>
  );
};

export default Hero;