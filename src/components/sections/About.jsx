import React from 'react';
import styled from '@emotion/styled';

const AboutSection = styled.section`
  padding: 8rem 0;
  background: var(--background-light);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 60px;
      height: 4px;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: var(--background-dark);
  border-radius: 1rem;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutGrid>
          <ImageContainer>
            <img src="/src/assets/icon.jpg" alt="Profile" />
          </ImageContainer>
          <ContentContainer>
            <h2>About Me</h2>
            <Description>
              As a dedicated second-year IT student, I'm passionate about exploring and learning modern 
              technologies. My journey in tech has equipped me with foundational knowledge in programming, 
              web development, and problem-solving skills. I enjoy tackling challenges and turning ideas 
              into reality through code.
            </Description>
            <Description>
              Currently focusing on web development and software engineering fundamentals, I'm actively 
              working on college projects while also pursuing self-directed learning through online 
              courses and hands-on coding practice.
            </Description>
            <Stats>
              <StatItem>
                <h3>2+</h3>
                <p>Years of Study</p>
              </StatItem>
              <StatItem>
                <h3>3+</h3>
                <p>College Projects</p>
              </StatItem>
              <StatItem>
                <h3>5+</h3>
                <p>Tech Skills</p>
              </StatItem>
            </Stats>
          </ContentContainer>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 