import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9677c433ad064986bb4815634f0289e1",
  },
});
