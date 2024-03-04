import React from "react";
import { DSACardsdata } from "@/data";
import DSACard from "./DSACard";
const DSACards = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center py-20">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 mx-2">
        {DSACardsdata.map((card) => (
            <DSACard id={card.id} title={card.title} url={card.url} imageurl={card.imageurl}  explanation={card.explanation} source_code={card.source_code}/>
        ))}
        
      </div>
    </div>
  );
};

export default DSACards;
