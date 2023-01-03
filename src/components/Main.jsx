import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
};

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
      scrollIntoView(link);
    });

    const home = document.querySelector('.home__container');
    const homeHeight = home.getBoundingClientRect().height;

    // 투명하게 만들기
    document.addEventListener('scroll', () => {
      home.style.opacity = 1 - window.scrollY / homeHeight;
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
