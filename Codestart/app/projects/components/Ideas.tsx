import Idea from "./Idea";
import {IdeasData } from "@/data";

const Ideas = () => {
  return (
    <div>
      <div className="py-20 px-3 flex items-center justify-center">
        <div className="container">
          <div className="mx-auto max-w-4xl sm:text-center">
            <img
              src="assets/images/landing/index-21.png"
              className="w-40 mx-auto"
              alt=""
            />
            <h2 className="md:text-5xl text-3xl text-white font-semibold tracking-tight">
              List of the Project that will add
            </h2>
            <div className="flex justify-center">
              <p className="md:w-1/2 mt-6 text-xl/8 font-medium text-gray-500 dark:text-gray-400">
                In this section I put list of the project that wil add soon if
                you have any idea plese send to us from media
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grikd-cols-1 gap-6 mt-16 p-3">

            {IdeasData.map((idea) => (
            <Idea id={idea.id} title={idea.title} url={idea.url} ideas={idea.ideas} />
        ))}
          </div>
        </div>
      </div>
      {/* <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        <li>Live code editor</li>
        <li>Word Guessing </li>
        <li>QR Code generator</li>
        <li>Pong game</li>
        <li>Authntication</li>
        <li>Restfull API</li>
        <li>Movie Guide</li>
        <li>Password Generator</li>
        <li>adding card</li>
        <li>Currency Converter</li>
        <li>Drag and Drop Todo list</li>
        <li>Event Calendar</li>
        <li>Transalte</li>
        <li>Game release calender</li>
        <li>Email sender app</li>
        <li>Text Encryptor</li>
        <li>Multi step form</li>
        <li>Sudoku</li>
        <li>Video Player</li>
        <li>Image generator</li>
        <li>Chatbot</li>
        <li>3D Model</li>
      </ol> */}
    </div>
  );
};

export default Ideas;
