import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import dog3 from '../assets/imgs/dog3.jpg';

const Home = () => {
  return (
    <Box>
      <img src={dog3} alt={'dog3'} />
      <Typography variant={'h1'}>
        hello, <br /> I'm JJ
      </Typography>
      <Typography variant={'h2'}>GOOD</Typography>
      <Button>Contact me</Button>
    </Box>
  );
};

export default Home;
