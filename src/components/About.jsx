import React from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <Box className={'about section section__container'}>
      <h1>About Me</h1>
      <Typography variant={'caption'}>저에요</Typography>

      <Box className={'about__majors'}>
        <Box className={'major'}>
          <Box className={'major__icon'}>
            <FontAwesomeIcon icon={faUser} />
          </Box>
          <Box>
            <Box className={'major__label'}>이름</Box>
            <Box className={'major__value'}>몰라요</Box>
          </Box>
        </Box>

        <Box className={'major'}>
          <Box className={'major__icon'}>
            <FontAwesomeIcon icon={faPhone} />
          </Box>
          <Box>
            <Box className={'major__label'}>연락처</Box>
            <Box className={'major__value'}>010-0000-0000</Box>
          </Box>
        </Box>

        <Box className={'major'}>
          <Box className={'major__icon'}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Box>
          <Box>
            <Box className={'major__label'}>이메일</Box>
            <Box className={'major__value'}>aaa@aaa.com</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
