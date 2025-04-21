import React, { Children, Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const Content = ({ content: { content, mainFn, front, back, deploy, git } }) => {
  return (
    <Wrapper>
      <h3>
        {content.split('\n').map((line, index) => (
          <Fragment key={index}>
            {line}
            {index !== content.split('\n').length - 1 && <br />}
          </Fragment>
        ))}
      </h3>
      <SkillWrapper>
        <Box>
          <Label>주요 기능</Label>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, ml: 1 }}>
            {Children.toArray(mainFn?.map((v) => <ChipCustom label={v} variant="outlined" />))}
          </Stack>
        </Box>
        <Box>
          <Label>Front-End</Label>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, ml: 1 }}>
            {Children.toArray(front?.map((v) => <ChipCustom label={v} variant="outlined" />))}
          </Stack>
        </Box>
        <Box>
          <Label>Back-End</Label>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, ml: 1 }}>
            {Children.toArray(back?.map((v) => <ChipCustom label={v} variant="outlined" />))}
          </Stack>
        </Box>
        <Box>
          <Label>Deployment</Label>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, ml: 1 }}>
            {Children.toArray(deploy?.map((v) => <ChipCustom label={v} variant="outlined" />))}
          </Stack>
        </Box>
        <Box>
          <Label>GitHub</Label>
          <LinkCustom href={git?.href} target="_blank" rel="noopener noreferrer" underline="none">
            {git?.title}
          </LinkCustom>
        </Box>
      </SkillWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  font-size: 24px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const SkillWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const LinkCustom = styled(Link)`
  font-size: 20px;
  font-family: 'Pretendard', serif;
  margin-left: 10px;
`;

const Label = styled(Box)`
  display: table;
  width: auto;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  border-left: 5px solid #222;
  font-weight: 900;
  font-size: 1rem;
`;

const ChipCustom = styled(Chip)`
  font-family: 'Pretendard', serif;
`;
export default Content;
