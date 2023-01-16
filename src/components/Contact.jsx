import React from 'react';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box className={'section contact'} id={'contact'}>
      <Box className={'contact__links'}>
        <a href={'https://github.com/bell-ho'} target={'_blank'}>
          <GitHubIcon/>
        </a>
        <p className={'contact__rights'}>2023. Lee Jong Ho <br/> All rights reserved</p>
      </Box>
    </Box>
  );
};

export default Contact;
