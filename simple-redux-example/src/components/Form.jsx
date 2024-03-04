import { update } from "../redux/userSlice";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const handleUpdate = (e) => {
    e.preventDefault();
    if(name.trim() !== "" && email.trim() !== "") {
      dispatch(update({name , email}))
    }

  }
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your name
          </label>
          <input
            type="name"
            id="name"
            placeholder={user.name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleUpdate}

          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Form;
