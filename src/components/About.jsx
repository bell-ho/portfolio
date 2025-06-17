import React from 'react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <Box className={'about section section__container'} id={'about'}>
      <h1>About Me</h1>
      <Box className={'about__majors'}>
        <Box className={'major'}>
          <Box className={'major__icon'}>
            <FontAwesomeIcon icon={faUser} />
          </Box>
          <Box>
            <Box className={'major__label'}>이름</Box>
            <Box className={'major__value'}>이종호</Box>
          </Box>
        </Box>

        <Box className={'major'}>
          <Box className={'major__icon'}>
            <FontAwesomeIcon icon={faPhone} />
          </Box>
          <Box>
            <Box className={'major__label'}>연락처</Box>
            <Box className={'major__value'}>010-8560-1074</Box>
          </Box>
        </Box>

        <Box className={'major'}>
          <Box className={'major__icon'}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Box>
          <Box>
            <Box className={'major__label'}>이메일</Box>
            <Box className={'major__value'}>jj0101065@gmail.com</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
