import React from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Main Colors */
    --primary-color: #6366f1;      /* Indigo */
    --secondary-color: #8b5cf6;    /* Purple */
    --accent-color: #ec4899;       /* Pink */
    
    /* Background Colors */
    --background-dark: #0f172a;    /* Dark Blue */
    --background-light: #1e293b;   /* Lighter Blue */
    --nav-background: rgba(15, 23, 42, 0.95);
    
    /* Text Colors */
    --text-primary: #f8fafc;       /* Almost White */
    --text-secondary: #94a3b8;     /* Gray */
    
    /* Gradient Colors */
    --gradient-start: #6366f1;     /* Indigo */
    --gradient-mid: #8b5cf6;       /* Purple */
    --gradient-end: #ec4899;       /* Pink */
    
    /* Animation */
    --transition: all 0.3s ease-in-out;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-dark);
    color: var(--text-primary);
    line-height: 1.7;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
  }

  section {
    position: relative;
    padding: 6rem 0;
    overflow: hidden;
    width: 100%;

    &:nth-of-type(odd) {
      background: var(--background-light);
      padding: 6rem 0;
    }

    &:nth-of-type(even) {
      background: var(--background-dark);
      padding: 6rem 0;
    }

    &:first-of-type {
      padding-top: 6rem;
    }

    &:last-of-type {
      padding-bottom: 6rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);
    &:hover {
      color: var(--secondary-color);
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
  }

  .section-title {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(
        90deg,
        var(--gradient-start) 0%,
        var(--gradient-mid) 50%,
        var(--gradient-end) 100%
      );
      border-radius: 1.5px;
      transition: var(--transition);
    }

    &:hover::after {
      transform: scaleX(1.05);
    }
  }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding-bottom: 60px;
  }
`;

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Sidebar />
      <MainContainer>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </MainContainer>
    </>
  );
};

export default App;
