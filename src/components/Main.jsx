import React, { Fragment, useEffect, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollObserver from '../hooks/useScrollObserver';
import useScrollToSection from '../hooks/useScrollToSection';
import useNavbarToggle from '../hooks/useNavbarToggle';

const Main = () => {
  const selectedNavIndex = useScrollObserver();
  const scrollIntoView = useScrollToSection(selectedNavIndex);
  useNavbarToggle(scrollIntoView);

  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />

      <button className={'arrow-up'} onClick={() => scrollIntoView('#home')}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </Fragment>
  );
};

export default Main;
