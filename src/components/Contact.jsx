import React from 'react';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact = () => {
  return (
    <Box className={'section contact'}>
      <Typography variant={'h1'} className={'contact__title'}>
        Let's talk
      </Typography>
      <Typography variant={'h2'} className={'contact__email'}>
        aaa@aaa.com
      </Typography>
      <Box className={'contact__links'}>
        <a href={'#'} target={'_blank'}>
          <GitHubIcon />
        </a>
        <Typography variant={'caption'} className={'contact__rights'}>
          GOOD
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
