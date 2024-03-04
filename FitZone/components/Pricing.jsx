import React from "react";
import Image from "next/image";

import { pricing } from "../data";

import PlanList from "./PlanList";

const Pricing = () => {
  const { icon, title, plans } = pricing;
  return (
    <section className="section">
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <Image src={icon} alt="" width="300px" height="300px" />
        <h2 className="h2">{title}</h2>
        <span className="text-primary-200">.</span>
      </div>
      {/* plan list */}
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;
