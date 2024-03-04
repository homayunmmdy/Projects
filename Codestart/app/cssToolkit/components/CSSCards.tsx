import CSSCard from "./CSSCard";
import { CSSToolkitData } from "@/data";

const CSSCards = () => {
  return (
    <div>
      <section
        className="w-full  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-items-center justify-center gap-7  p-10"
      >
         {CSSToolkitData.map((card) => (
            <CSSCard id={card.id} title={card.title} url={card.url} imgurl={card.imgurl} videourl={card.videourl}/>
        ))}
      </section>
    </div>
  );
};

export default CSSCards;
