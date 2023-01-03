import React from 'react';
import { Box, Typography } from '@mui/material';
import frontend from '../assets/imgs/stacks/fe/frontend.png';
import dog3 from '../assets/imgs/dog3.jpg';

const Skills = () => {
  return (
    <Box className={'section skills'} id={'skills'}>
      <Box className={'section__container'}>
        <h1>Skills</h1>
        <Box className={'skills__content'}>
          <Box className={'stack__container'}>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>FE</Box>
              <img src={frontend} className={'skills_img'} alt={'#'} />
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>BE</Box>
              <img src={dog3} className={'skills_img'} alt={'#'}></img>
              <img src={dog3} className={'skills_img'} alt={'#'}></img>
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Version Control</Box>
              <img src={dog3} className={'skills_img'} alt={'#'}></img>
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Communication</Box>
              <img src={dog3} className={'skills_img'} alt={'#'}></img>
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Certificate</Box>
              <img src={dog3} className={'skills_img'} alt={'#'}></img>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
