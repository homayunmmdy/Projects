import { CSSToolkitDataType } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CSSCard = ({id, title, url, imgurl , videourl }: CSSToolkitDataType) => {
  return (
    <>
      <div key={id} className="w-full h-full border border-slate-500/30 p-4 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href={url}>
        {imgurl ? (
              <Image
              src={imgurl}
              width={600}
              height={600}
              title={title}
              alt={title}
              className="h-70 w-full object-cover rounded-t-xl aspect-video"
            />
          ): (

          <video
            width="600"
            height="600"
            className="h-70 w-full object-cover rounded-t-xl aspect-video"
            controls
          >
            <source src={videourl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          )}
        
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-white truncate block capitalize">
              {title}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CSSCard;
