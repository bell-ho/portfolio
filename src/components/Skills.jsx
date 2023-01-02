import React from 'react';
import { Box, Typography } from '@mui/material';

const Skills = () => {
  const [progress, setProgress] = React.useState(70);
  return (
    <Box className={'section skills'}>
      <Typography variant={'h1'}>Skills</Typography>
      <Typography variant={'h2'}>Skills & Attributes</Typography>
      <Typography variant={'caption'}>설명</Typography>
      <Box className={'skillset'}>
        <Box className={'skillset__left'}>
          <Typography variant={'h3'}>Skills</Typography>
          <Box className={'skill'}>
            <Box className={'skill__description'}>
              <span>HTML</span>
              <span>99%</span>
            </Box>
            <Box className={'skill__bar'}>
              <Box className={'skill__value'}></Box>
            </Box>
          </Box>
        </Box>
        <Box className={'skillset__right'}>
          <Box className={'tools'}>
            <Typography variant={'h3'} className={'skillset__title'}>
              Tools
            </Typography>
            <ul className={'tools__list'}>
              <li>
                <span>VS</span>
              </li>
              <li>
                <span>intellij</span>
              </li>
            </ul>
          </Box>
          <Box className={'etc'}>
            <Typography variant={'h3'} className={'skillset__title'}>
              Etc
            </Typography>
            <ul className={'etc__list'}>
              <li>
                <span>Git</span>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
