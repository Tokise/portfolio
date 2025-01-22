import React from 'react';
import styled from '@emotion/styled';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/2pro.png';


const ProjectsSection = styled.section`
  padding: 8rem 0;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: var(--background-light);
  border-radius: 1rem;
  overflow: hidden;
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    .project-image img {
      transform: scale(1.1);
    }
  }
`;

const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 60%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: var(--background-dark);
  color: var(--primary-color);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Web Parking System",
      description: "A comprehensive parking management system built with Java and MySql. Features include real-time parking slot monitoring, automated billing system, and a user-friendly dashboard for both administrators and customers.",
      image: project1,
      tech: ["Java", "JavaScript", "HTML", "MySql"],
      liveLink: "https://webparkingsystem.com",
      githubLink: "https://github.com/username/web-parking-system"
    },
    {
      title: "Tensura Wiki",
      description: "An interactive wiki platform dedicated to 'That Time I Got Reincarnated as a Slime' anime/manga series. Features character profiles, story arcs, and a comprehensive database of the series' universe.",
      image: project2,
      tech: ["HTML", "CSS Modules", "JavaScript"],
      liveLink: "https://tensurawiki.com",
      githubLink: "https://github.com/username/tensura-wiki"
    },
  
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage className="project-image">
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </ProjectLink>
                  <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 