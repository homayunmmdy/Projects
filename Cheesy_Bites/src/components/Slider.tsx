"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        spaceBetween={5}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 3000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
              <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
                <h1
                  className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl"
                  title={item.title}
                >
                  {item.title}
                </h1>
                <button className="bg-red-500 text-white py-4 px-8">
                  Order Now
                </button>
              </div>
              <div className="w-full flex-1 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
