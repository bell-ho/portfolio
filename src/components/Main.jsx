import React, { useEffect, useLayoutEffect } from "react";
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
};

const Main = () => {

  useLayoutEffect(() => {
    const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

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
      navbarMenu.classList.remove('open');
      scrollIntoView(link);
    });

    const home = document.querySelector('.home__container');
    const homeHeight = home.getBoundingClientRect().height;

    // 투명하게 만들기
    document.addEventListener('scroll', () => {
      home.style.opacity = 1 - window.scrollY / homeHeight;
    });

    const arrowUp = document.querySelector('.arrow-up');

    document.addEventListener('scroll', () => {
      if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
      } else {
        arrowUp.classList.remove('visible');
      }
    });

    arrowUp.addEventListener('click', () => {
      scrollIntoView('#home');
    });

    navbarToggleBtn.addEventListener('click', () => {
      navbarMenu.classList.add("open");
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

      <button className={'arrow-up'}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default Main;
