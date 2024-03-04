import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  return (
    <>
      <div  className=" flex justify-center pt-5">
        <form className="w-96 bg-white rounded-md shadow-lg z-10  flex items-center justify-center p-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={searchQuery.title || searchQuery.description}
            placeholder="Search by title or description"
            onChange={handleInputChange}
            className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
