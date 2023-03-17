import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Projects from '../components/projects';

const Work = () => {
  return (
    <Box className={'section work'} id={'work'}>
      <Box className={'section__container'}>
        <h1>Projects</h1>
        <Projects />
      </Box>
    </Box>
  );
};

export default Work;
