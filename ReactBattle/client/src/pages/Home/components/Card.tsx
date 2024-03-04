import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  imageUrl?: string;
  videoUrl?: string;
  desc: string;
}

const Card = ({ id, title, imageUrl, videoUrl, desc }: Props) => {
  return (
    <>
      <div
        style={{ backdropFilter: "blur(5px)" }}
        key={id}
        className=" w-10/12 md:w-1/4 h-full bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg"
      >
        <Link to={`/battle/${id}`}>
          <div className="w-full mb-3 pb-3 border-b border-1 border-white">
            <h3 className="text-xl font-semibold text-shadow">{title}</h3>
          </div>
          <div>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover mb-2"
              />
            ) : (
              <video className="w-full h-48 object-cover mb-2" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p className="mb-3 tracking-wide text-base text-shadow">{desc}</p>
            <button
              style={{ backdropFilter: "blur(5px)" }}
              className=" bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg"
            >
              See detail
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
