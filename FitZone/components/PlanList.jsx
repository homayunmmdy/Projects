import React, { useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  //index state

  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
      {plans.map((plan, currentIndex) => {
        const { name, price, list, delay } = plan;
        return (
          <div
            onClick={() => setIndex(currentIndex)}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]"
            key={currentIndex}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
          >
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] transition duration-100 ease-in-out`}
            >
              <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center">
                <div>
                  <div
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    } h-[26px] font-primary text-sm font-semibold min-w-min mx-auto px-[14px] flex items-center justify-center mb-8`}
                  >
                    {name}
                  </div>
                  <div className="text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center">
                    <div className="leading-none">
                      <span className="tracking-[0.1px]">{price}</span>
                      <span className="text-[30px] font-extrabold">$</span>
                    </div>
                    <span className="text-sm font-medium">/month</span>
                  </div>
                </div>

                {/* List & btn wrapper */}

                <div>
                  <ul className="flex flex-col gap-y-4 mb-8">
                    {list.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="flex items-center gap-x-[10px]"
                        >
                          <BsCheckCircleFill className="text-lg" />
                          <div>{item.name}</div>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "border border-neutral-500"
                    } btn btn-lg rounded-[1px] lg:mx-auto`}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
