import React, { useState } from "react";
import axios from "axios";

const AdminPostForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!imgUrl && !videoUrl) {
        throw new Error("Please provide either an image URL or video URL");
      }
      if (imgUrl && videoUrl) {
        throw new Error("Please provide either an image URL or video URL");
      }
      
      const response = await axios.post("/api/battles", {
        name,
        desc,
        imgUrl,
        videoUrl,
      });
      console.log("New battle created:", response.data);
      setSuccessMessage("Battle created successfully!");
      // Reset form fields
      setName("");
      setDesc("");
      setImgUrl("");
      setVideoUrl("");
    } catch (err) {
      console.error("Error creating battle:", err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6">
      {successMessage && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Success!</p>
          <p>{successMessage}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrl" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
          <input
            type="text"
            id="imgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="videoUrl" className="block text-gray-700 text-sm font-bold mb-2">Video URL</label>
          <input
            type="text"
            id="videoUrl"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter video URL"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Battle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPostForm;

