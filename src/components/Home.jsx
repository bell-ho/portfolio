import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import dog3 from '../assets/imgs/dog3.jpg';

const Home = () => {
  return (
    <Box className={'home'}>
      <img src={dog3} alt={'dog3'} className={'home__avatar'} />
      <h1 className={'home__title'}>
        Hello, <br /> I'm JJ GOOOOOOD
      </h1>
      <h2 className={'home__description'}>GOOD</h2>
      <button className={'home__contact'}>Contact me</button>
    </Box>
  );
};

export default Home;
