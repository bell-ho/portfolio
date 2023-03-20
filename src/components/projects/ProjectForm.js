import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import ImageBox from './ImageBox';

const ProjectForm = () => {
  return (
    <Wrapper>
      <h2>프로젝트</h2>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 240px;
  height: 320px;
  background-color: #f4623a;
  border-radius: 10px;
  padding: 2rem;
`;
export default ProjectForm;
