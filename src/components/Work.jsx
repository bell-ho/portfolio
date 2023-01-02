import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import dog3 from '../assets/imgs/dog3.jpg';

const Work = () => {
  return (
    <Box className={'section work'}>
      <Typography variant={'h1'}>My work</Typography>
      <Typography variant={'h3'}>Projects</Typography>
      <Box className={'work__categories'}>
        <Button className={'category__btn'}>
          All<span className={'category__count'}>8</span>
        </Button>
        <Button className={'category__btn'}>
          FE<span className={'category__count'}>4</span>
        </Button>
        <Button className={'category__btn'}>
          BE<span className={'category__count'}>4</span>
        </Button>
      </Box>

      <Box className={'work__projects'}>
        <a href={'#'} className={'project'} target={'_blank'}>
          <img src={dog3} alt={''} align={'good'} className={'project__img'} />
          <Box className={'project__description'}>
            <Typography variant={'h3'}>Good Project</Typography>
            <span>HTML, CSS</span>
          </Box>
        </a>
      </Box>
    </Box>
  );
};

export default Work;
