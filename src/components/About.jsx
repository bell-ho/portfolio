import React from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dog3 from '../assets/imgs/dog3.jpg';

const About = () => {
  return (
    <Box>
      <Typography variant={'h1'}>About me</Typography>
      <Typography variant={'caption'}>설명</Typography>

      <Box className={'about__majors'}>
        <Box className={'major'}>
          <Box className={'major__icon'}>
            <FontAwesomeIcon icon="fa-brands fa-react" />
          </Box>
          <Box className={'major__title'}>Front-end</Box>
          <Box className={'major__description'}>HTML, CSS, JS, React, Vue</Box>
        </Box>

        <Box className={'major'}>
          <Box className={'major__icon'}>
            <FontAwesomeIcon icon="fa-brands fa-react" />
          </Box>
          <Box className={'major__title'}> Back-end</Box>
          <Box className={'major__description'}>Java</Box>
        </Box>
      </Box>

      <Box className={'about__jobs'}>
        <Box className={'job'}>
          <img src={dog3} alt={'dog'} className={'job__logo'} />
          <Typography variant={'caption'} className={'job__name'}>
            우하하하
          </Typography>
          <Typography variant={'caption'} className={'job__period'}>
            1년
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
