import React, { Children } from 'react';
import { Box } from '@mui/material';
import {
  back,
  certificate,
  communication,
  deployment,
  front,
  versionControl,
} from '../assets/imgs/stacks/stacks';

const Skills = () => {
  return (
    <Box className={'section skills'} id={'skills'}>
      <Box className={'section__container'}>
        <h1>Skills</h1>
        <Box className={'skills__content'}>
          <Box className={'stack__container'}>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Front-End</Box>
              {Children.toArray(front.map((v) => <img src={v} />))}
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Back-End</Box>
              {Children.toArray(back.map((v) => <img src={v} />))}
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Version Control</Box>
              {Children.toArray(versionControl.map((v) => <img src={v} />))}
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Deployment</Box>
              {Children.toArray(deployment.map((v) => <img src={v} />))}
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Communication</Box>
              {Children.toArray(communication.map((v) => <img src={v} />))}
            </Box>
            <Box className={'stacks__tech'}>
              <Box className={'skills__title'}>Certificate</Box>
              {Children.toArray(certificate.map((v) => <img src={v} />))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
