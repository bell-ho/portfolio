import React from 'react';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from '@emotion/styled';
import velog from '../assets/imgs/velog.jpg';
const Contact = () => {
  return (
    <Box className={'section contact'} id={'contact'}>
      <Box className={'contact__links'}>
        <Wrapper>
          <a href={'https://github.com/bell-ho'} target={'_blank'}>
            <GitHubIcon style={{ fontSize: 50 }} />
          </a>
          <a href="https://velog.io/@bell-ho" target="_blank" rel="noreferrer">
            <img style={{ width: 46, borderRadius: 30, marginTop: 5 }} src={velog} alt={velog} />
          </a>
        </Wrapper>
        <p className={'contact__rights'}>
          2023. Lee Jong Ho <br /> All rights reserved
        </p>
      </Box>
    </Box>
  );
};
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export default Contact;
