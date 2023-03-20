import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import ImageBox from '../ImageBox';

const Images = ({ images }) => {
  return (
    <Wrapper>
      <ImageBox images={images} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)``;

export default Images;
