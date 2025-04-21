import React from 'react';
import { Box } from '@mui/material';
import Projects from './projects/Projects';
import styled from '@emotion/styled';

const Work = () => {
  return (
    <Box className={'section work'} id={'work'}>
      <Box className={'section__container'}>
        <h1>Projects</h1>
        <Wrapper>
          <Projects />
        </Wrapper>
      </Box>
    </Box>
  );
};

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

export default Work;
