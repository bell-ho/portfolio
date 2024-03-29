import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import careerMd from '../assets/md/career.md';
import MDEditor from '@uiw/react-md-editor';
const Career = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  useEffect(() => {
    fetch(careerMd)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);
  return (
    <Wrapper id={'career'}>
      <h1 style={{ alignSelf: 'center' }}>Career</h1>
      <MdWrapper>
        <MDEditor.Markdown style={{ backgroundColor: '#f5f5f5' }} source={markdownContent} />
      </MdWrapper>
    </Wrapper>
  );
};

const MdWrapper = styled(Box)`
  max-width: 1200px;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

export default Career;
