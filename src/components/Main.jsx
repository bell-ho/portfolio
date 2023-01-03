import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

const Main = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('#navbar');
      const navbarHeight = navbar.getBoundingClientRect().height;
      if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
      } else {
        navbar.classList.remove('navbar--dark');
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default Main;
