import React from "react";
import Image from "next/image";

import { join } from "../data";

const Join = () => {
  const { image, title, subtitle, btnText } = join;
  return (
    <section className="bg-neutral-500 min-h-[537px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-x-24 lg:-space-y-0">
          <div
            className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <Image src={image} width="" height="" className="z-10" />
          </div>
          <div
            className="max-w-[350px] z-40 lg:max-w-[492px] ml-[30px]"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <h2 className="h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 text-white">
              Want to join <span className="text-primary-200">& </span>have fun?
            </h2>
            <p className="text-body-sm text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]">
              {subtitle}
            </p>
            <button className="btn btn-secondary btn-lg">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
