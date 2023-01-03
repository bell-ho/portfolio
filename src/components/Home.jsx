import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import dog3 from '../assets/imgs/dog3.jpg';

const Home = () => {
  return (
    <Box className={'home'} id={'home'}>
      <Box className={'home__container'}>
        <img src={dog3} alt={'dog3'} className={'home__avatar'} />
        <h1 className={'home__title'}>
          Hello, <br /> I'm JH
        </h1>
        <h2 className={'home__description'}>GOOD</h2>
        <button
          onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          className={'home__contact'}
        >
          Contact Me
        </button>
      </Box>
    </Box>
  );
};

export default Home;
