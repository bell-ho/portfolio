import React, { Children } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import Content from '../../components/projects/content/Content';
import Images from '../../components/projects/content/Images';
import { projects } from '../../assets/projects/projects';

const Projects = () => {
  return Children.toArray(
    projects.map((v) => (
      <Wrapper container>
        <Grid item xs={12}>
          <h1>{v.name}</h1>
          <h3>{v.productionPeriod}</h3>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Images images={v.images} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Content content={v.mainContent} />
          </Grid>
        </Grid>
      </Wrapper>
    )),
  );
};

const Wrapper = styled(Grid)`
  background-color: rgb(255, 255, 255);
  padding: 2rem;
  border-radius: 20px;
  gap: 20px;
  margin-bottom: 30px;
`;

export default Projects;
