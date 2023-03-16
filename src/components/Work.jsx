import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import jh from '../assets/imgs/main_profile.jpg';

const Work = () => {
  return (
    <Box className={'section work'} id={'work'}>
      <Box className={'section__container'}>
        <h1>My work</h1>
        <h3>Projects</h3>
        <Box className={'work__categories'}>
          <button className={'category__btn'}>
            All<span className={'category__count'}>8</span>
          </button>
          <button className={'category__btn'}>
            FE<span className={'category__count'}>4</span>
          </button>
          <button className={'category__btn'}>
            BE<span className={'category__count'}>4</span>
          </button>
        </Box>

        <Box className={'work__projects'}>
          <a href={'#'} className={'project'} target={'_blank'}>
            <img src={jh} alt={''} align={'good'} className={'project__img'} />
            <Box className={'project__description'}>
              <h3>Good Project</h3>
              <span>HTML, CSS</span>
            </Box>
          </a>

          <a href={'#'} className={'project'} target={'_blank'}>
            <img src={jh} alt={''} align={'good'} className={'project__img'} />
            <Box className={'project__description'}>
              <h3>Good Project</h3>
              <span>HTML, CSS</span>
            </Box>
          </a>

          <a href={'#'} className={'project'} target={'_blank'}>
            <img src={jh} alt={''} align={'good'} className={'project__img'} />
            <Box className={'project__description'}>
              <h3>Good Project</h3>
              <span>HTML, CSS</span>
            </Box>
          </a>

          <a href={'#'} className={'project'} target={'_blank'}>
            <img src={jh} alt={''} align={'good'} className={'project__img'} />
            <Box className={'project__description'}>
              <h3>Good Project</h3>
              <span>HTML, CSS</span>
            </Box>
          </a>

          <a href={'#'} className={'project'} target={'_blank'}>
            <img src={jh} alt={''} align={'good'} className={'project__img'} />
            <Box className={'project__description'}>
              <h3>Good Project</h3>
              <span>HTML, CSS</span>
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Work;
