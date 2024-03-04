/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

export default function LandingCards({}: Props) {
  return (
    <div className="flex flex-col w-full min-h-max pb-12">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-x-[1px] text-white px-4 lg:px-16">
        <div className="flex flex-col justify-start items-start p-6 gap-4 bg-cp-color-6 rounded-lg mx-8">
          <div className="bg-cp-color-3 rounded-lg h-20 w-20 p-4 relative mb-4 mt-[-60px]">
            <img
              src="https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg"
              alt="Icon of conveyer belt with boxes on it."
            />
          </div>
          <h2 className="font-black text-2xl">Build &amp; Test</h2>
          <p className="text-sm">
            Get work done quicker by building out{" "}
            <strong>entire projects</strong> or isolating code to{" "}
            <strong>test features and animations</strong>. Want to keep it all
            under wraps?{" "}
            <a href="/features/pro">
              <strong className="text-blue-400">
                Upgrade to a{" "}
                <span
                  className="rounded-sm px-1 py-[0.2] bg-yellow-300 text-xs text-black "
                  data-test-id="pro-badge"
                  style={{ margin: "0px 2px" }}
                >
                  PRO
                </span>{" "}
                account{" "}
              </strong>
            </a>
            to keep your work private.
          </p>
          <a
            href="/pen/"
            className=" bg-cp-color-13 hover:bg-cp-color-9 text-white text-sm p-4 py-4 px-4 rounded mr-2 mb-1 flex flex-col items-center justify-center"
          >
            <span>Try the Editor</span>
          </a>
        </div>
        <div className="flex flex-col justify-start items-start p-6 gap-4 bg-cp-color-6 rounded-lg mx-8">
          <div className="bg-cp-color-3 rounded-lg h-20 w-20 p-4 relative mb-4 mt-[-60px]">
            <img
              src="https://cpwebassets.codepen.io/assets/packs/icon-learn-b1311620e99cea826f259aa2f7750940.svg"
              alt="Icon of Map"
            />
          </div>
          <h2 data-test-id="promo-discover" className="font-black text-2xl">
            Learn &amp; Discover
          </h2>
          <p className="text-sm">
            Want to upgrade your skills and get noticed? Participating in
            CodePen Challenges is a great way to try something new. We
            frequently feature these Pens on our homepage and across social
            media!
          </p>
          <a
            href="/challenges/"
            className=" bg-cp-color-13 hover:bg-cp-color-9 text-white text-sm p-4 py-4 px-4 rounded mr-2 mb-1 flex flex-col items-center justify-center"
          >
            <span>Join this Week’s Challenge</span>
          </a>
        </div>
        <div className="flex flex-col justify-start items-start p-6 gap-4 bg-cp-color-6 rounded-lg mx-8">
          <div className="bg-cp-color-3 rounded-lg h-20 w-20 p-4 relative mb-4  mt-[-60px]">
            <img
              src="https://cpwebassets.codepen.io/assets/packs/icon-share-910c683bbac21bf41fcf9aab64ebc957.svg"
              alt="Icon of Globe"
            />
          </div>
          <h2 data-test-id="promo-share" className="font-black text-2xl">
            Share Your Work
          </h2>
          <p className="text-sm">
            Become a part of the{" "}
            <strong>most active front-end community</strong> in the world by
            sharing work. Presenting at a conference? Show your code directly in
            the browser with{" "}
            <a href="https://blog.codepen.io/documentation/pro-features/presentation-mode/">
              <strong className="text-blue-400">Presentation Mode</strong>
            </a>
            .
          </p>
          <a
            href="#trending"
            className=" bg-cp-color-13 hover:bg-cp-color-9 text-white text-sm p-4 py-4 px-4 rounded mr-2 mb-1 flex flex-col items-center justify-center"
          >
            <span>Explore Trending</span>
          </a>
        </div>
      </div>
      <div className="overflow-x-hidden overflow-y-auto w-screen h-max -z-[2] relative flex">
        <img
          src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg"
          alt=""
          className="w-[600px] sm:-translate-x-16 -translate-x-36"
        />
      </div>
    </div>
  );
}
