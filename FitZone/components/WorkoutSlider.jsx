import React from "react";
import { workouts } from "../data";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const WorkoutSlider = () => {
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, idx) => {
        const { image, name } = program;

        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative"
            key={idx}
          >
            <Image
              className="w-full h-full object-cover"
              src={image}
              alt=""
              width="350px"
              height="300px"
              objectFit="cover"
            />
            <div className="absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]">
              <div className="font-primary font-semibold text-sm text-neutral-500">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
