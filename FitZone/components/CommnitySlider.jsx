import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const CommnitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={"auto"}
      grabCursor={"true"}
      modules={[]}
    >
      {testimonials.map((testimonial, idx) => {
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={idx}>
            <div className="relative">
              <div>
                <Image src={image} alt="" width="400px" height="500px" />
              </div>
              {/* Message & Name */}
              <div className="absolute bottom-[30px] text-white p-[20px] text-center">
                <div className="mb-8 italic text-md">{message}</div>
                <div className="flex items-center justify-center gap-x-[3px]">
                  <span className="text-[30px] text-primary-200 font-bold">
                    ~
                  </span>
                  <div className="text-[20px] font-bold">{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommnitySlider;
