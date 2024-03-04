import { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Card from "./Card";

interface BattleType {
  _id: string;
  name: string;
  desc: string;
  imgUrl?: string;
  videoUrl?: string;
}

const Cards = () => {
  const [battles, setBattles] = useState<BattleType[]>([]);

  useEffect(() => {
    fetchBattles();
  }, []);

  const fetchBattles = async (searchParams = {}) => {
    try {
      const response = await axios.get("api/battles", {
        params: searchParams,
      });
      setBattles(response.data);
    } catch (error) {
      console.error("Error fetching battles:", error);
    }
  };

  const handleSearch = (searchParams) => {
    fetchBattles(searchParams);
  };

  return (
    <div className=" w-full min-h-screen bg-cover bg-center bg-stone-400" style={{ backgroundImage: "url(/cardbg.jpg)" }}>
      <SearchForm onSearch={handleSearch} />
      <div
        className=" flex flex-wrap justify-center items-center gap-3 py-5  	"
        
      >
        {battles.map((battle) => (
          <>
            <Card
              id={battle._id}
              title={battle.name}
              desc={battle.desc}
              imageUrl={battle.imgUrl}
              videoUrl={battle.videoUrl}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Cards;
