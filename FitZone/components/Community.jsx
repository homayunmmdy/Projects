import React from "react";
import Image from "next/image";

import { community } from "../data";
import CommunitySlider from "../components/CommnitySlider";

const Community = () => {
  const { icon, title, testimonials } = community;
  return (
    <section className="section relative">
      <div className="container mx-auto">
        <div className="flex">
          <div
            className="section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delya="200"
          >
            <Image src={icon} width="100px" height="100px" objectFit="cover" />
            <h2 className="h2 section-title">
              {title}
              <span className="text-primary-200">.</span>
            </h2>
          </div>
          <div
            className="absolute -right-[375px] w-[1140px] lg:-right-[280px] top-48 lg:top-0"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delya="300"
          >
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
