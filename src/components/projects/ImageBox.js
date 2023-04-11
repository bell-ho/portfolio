import React, { Children } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";

const ImageBox = ({ images }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
      autoHeight
    >
      {Children.toArray(
        images.map((v) => (
          <SwiperSlide>
            <img src={v} alt={v} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};
export default ImageBox;
