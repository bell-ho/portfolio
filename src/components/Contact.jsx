import React from 'react';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box className={'section contact'}>
      <h1 className={'contact__title'}>Let's talk</h1>
      <h2 className={'contact__email'}>aaa@aaa.com</h2>
      <Box className={'contact__links'}>
        <a href={'#'} target={'_blank'}>
          <GitHubIcon />
        </a>
        <p className={'contact__rights'}>All rights</p>
      </Box>
    </Box>
  );
};

export default Contact;
