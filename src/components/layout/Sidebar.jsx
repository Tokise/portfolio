import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background: var(--nav-background);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 60px;
    bottom: 0;
    top: auto;
    background: var(--background-light);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--primary-color);
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: var(--transition);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: var(--transition);

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: var(--primary-color);
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 60px;
    left: 0;
    width: 100%;
    background: var(--background-light);
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    transform: translateY(${props => props.isOpen ? '0' : '100%'});
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease-in-out;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    animation: ${props => props.isOpen ? slideIn : 'none'} 0.3s ease-in-out;
    z-index: 99;
  }
`;

const NavItem = styled.a`
  color: var(--text-secondary);
  font-size: 1.3rem;
  transition: var(--transition);
  position: relative;

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
  }

  span {
    display: none;
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    bottom: -2.5rem;
    transform: translateX(-50%);
    background: var(--background-light);
    color: var(--text-primary);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    white-space: nowrap;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--primary-color);
    animation: ${fadeIn} 0.2s ease-out;
    z-index: 1000;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    span {
      display: inline-block;
      margin-left: 0.5rem;
    }

    &::after {
      display: none;
    }
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 98;
  }
`;

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          !event.target.closest('.nav-menu') && 
          !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Overlay isOpen={isMenuOpen} />
      <SidebarContainer>
        <Logo>&lt;/John&gt;</Logo>
        <MenuButton onClick={toggleMenu} className="menu-button">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </MenuButton>
        <NavList isOpen={isMenuOpen} className="nav-menu">
          <NavItem href="#home" data-tooltip="Home">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavItem>
          <NavItem href="#about" data-tooltip="About">
            <i className="fas fa-user"></i>
            <span>About</span>
          </NavItem>
          <NavItem href="#projects" data-tooltip="Projects">
            <i className="fas fa-code"></i>
            <span>Projects</span>
          </NavItem>
          <NavItem href="#skills" data-tooltip="Skills">
            <i className="fas fa-tools"></i>
            <span>Skills</span>
          </NavItem>
          <NavItem href="#contact" data-tooltip="Contact">
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </NavItem>
        </NavList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;