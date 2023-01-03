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

    const navbarMenu = document.querySelector('.navbar__menu');
    navbarMenu.addEventListener('click', (event) => {
      const target = event.target;
      const link = target.dataset.link;
      if (link == null) {
        return;
      }
      const scrollTo = document.querySelector(link);
      scrollTo.scrollIntoView({ behavior: 'smooth' });
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
