/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

export default function StartTeam({}: Props) {
  return (
    <div className="flex flex-col px-[10%] justify-center items-center pt-16 text-white text-center">
      <div className="flex flex-col px-[10%] justify-center w-full items-center text-white text-center">
        <div className="flex flex-col bg-[#1E1F26] w-full justify-center items-center py-16 gap-8 rounded-md">
          <div className="flex flex-col justify-center items-center gap-4 sm:max-w-[35rem] max-w-[60vw]">
            <h2 className="text-2xl font-black">Bring the Whole Team</h2>
            <p className="text-sm font-light text-white/80">
              Each team and team member gets{" "}
              <strong className="text-normal">
                all the features of a{" "}
                <span
                  className="rounded-sm px-1 py-[0.2] bg-yellow-300 text-xs text-black font-normal "
                  data-test-id="pro-badge"
                  style={{ margin: "0px 2px;" }}
                >
                  PRO
                </span>{" "}
                membership
              </strong>
              . That means the Team can do things like upload Assets, use
              features like{" "}
              <strong className="text-normal"> Collab Mode</strong>, Professor
              Mode, Presentation Mode, and Live View, and apply custom CSS to
              Posts, Profiles, and Embeds.
            </p>
            <a
              href="/features/teams"
              className=" bg-cp-color-11 hover:bg-cp-color-10 break-keep text-black hover:text-white text-sm p-4 py-4 rounded mr-2 mb-1 grid place-content-center"
              data-color="green"
            >
              Start a Team
            </a>
          </div>
          <h3 className="text-lg font-black">
            Loved by hundreds of teams, including:
          </h3>
          <div className="flex flex-wrap gap-6 items-center justify-center ">
            <img
              src="https://cpwebassets.codepen.io/assets/packs/airbnb-cb44d3434e60956b120c2cfd2afa9a23.png"
              alt="Airbnb"
              className="h-8 w-auto"
            />
            <img
              src="https://cpwebassets.codepen.io/assets/packs/grubhub-f05150a98afe6175f221f4bc75ac3372.png"
              className="h-6 w-auto"
              alt="Grubhub"
            />
            <img
              src="https://cpwebassets.codepen.io/assets/packs/square-e4a6fa8c30a53180c593a11aeb1618c2.png"
              className="h-10 w-auto"
              alt="Square"
            />
            <img
              src="https://cpwebassets.codepen.io/assets/packs/netflix-8b4f0b76ad5ccaa1b6326267be6c396f.png"
              className="h-6 w-auto"
              alt="Netflix"
            />
            <img
              src="https://cpwebassets.codepen.io/assets/packs/adobe-0d9fee1af16f2db73270e52fbdcf4fe8.png"
              className="h-12 w-auto"
              alt="Adobe"
            />
            <img
              src="https://cpwebassets.codepen.io/assets/packs/salesforce-63204abcda6bd196c6a6da3bb4911510.png"
              className="h-16 w-auto"
              alt="Salesfoce"
            />
            <img
              src="https://cpwebassets.codepen.io/assets/packs/microsoft-0859118499110df3a66f00a999a53a40.png"
              className="h-10 w-auto"
              alt="Microsoft"
            />
            <img
              src="https://cpwebassets.codepen.io/assets/packs/lyft-87acc577a28f7c5fbafbed09b543dd91.png"
              className="h-8 w-auto"
              alt="Lyft"
            />
            <img
              src="https://cpwebassets.codepen.io/assets/packs/ibm-c6d225a3817a57e66f67fdcb18d1fe04.png"
              className="h-8 w-auto"
              alt="IBM"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden overflow-y-auto w-screen h-auto -z-[2] relative flex flex-end">
        <img
          src="https://cpwebassets.codepen.io/assets/packs/lines-1-6ac7ba4c47562c61c5018028fd2b7a0e.svg"
          alt=""
          className="w-[400px] sm:translate-x-16 translate-y-[-2rem] "
        />
      </div>
    </div>
  );
}
