import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import ProjectForm from './ProjectForm';

const Projects = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50, // 회전각도
        stretch: 0,
        depth: 100, // 깊이감도
        modifier: 2, //
        slideShadows: true, //선택한 부분 밝게 나머지는 그늘지게 해준다.
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      autoHeight
    >
      <SwiperSlide>
        <ProjectForm />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectForm />
      </SwiperSlide>
    </Swiper>
  );
};
const Wrapper = styled(Box)``;
export default Projects;
