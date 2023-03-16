import React from 'react';
import { Box } from '@mui/material';
import MainProfile from '../assets/imgs/main_profile.jpg';

const Home = () => {
  return (
    <Box className={'home'} id={'home'}>
      <Box className={'home__container'}>
        <img src={MainProfile} alt={'main_profile'} className={'home__avatar'} />
        <h1 className={'home__title'}>JH's Portfolio</h1>
        <h2 className={'home__description'}>
          안녕하세요 <br />웹 개발자 이종호 입니다.
        </h2>
      </Box>
    </Box>
  );
};

export default Home;
