import React from 'react';
import styled from '@emotion/styled';

const SkillsSection = styled.section`
  padding: 8rem 0;
  background: var(--background-light);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const SkillCategory = styled.div`
  background: var(--background-dark);
  border-radius: 1rem;
  padding: 2rem;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  i {
    font-size: 1.8rem;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div``;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  color: var(--text-primary);
  font-weight: 500;
`;

const SkillLevel = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  height: 6px;
  background: var(--background-light);
  border-radius: 3px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: var(--primary-color);
  border-radius: 3px;
  width: ${props => props.width}%;
  transition: width 1s ease-in-out;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      skills: [
        { name: "HTML/CSS", level: "Intermediate", progress: 80 },
        { name: "JavaScript", level: "Intermediate", progress: 50 },
        { name: "React", level: "Beginner", progress: 20 },
      
      ]
    },
    {
      title: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "Java", level: "Advanced", progress: 90 },
        { name: "SQL", level: "Moderate", progress: 65 }
      ]
    },

    {
      title: "Soft Skills",
      icon: "fas fa-users",
      skills: [
        { name: "Problem Solving", level: "Advanced", progress: 90 },
        { name: "Communication", level: "Advanced", progress: 85 },
        { name: "Team Leadership", level: "Intermediate", progress: 80 },
        { name: "Agile/Scrum", level: "Advanced", progress: 85 }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills & Expertise</SectionTitle>
        <SkillsContainer>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>
                <i className={category.icon}></i>
                {category.title}
              </CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>{skill.level}</SkillLevel>
                    </SkillHeader>
                    <ProgressBar>
                      <Progress width={skill.progress} />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 