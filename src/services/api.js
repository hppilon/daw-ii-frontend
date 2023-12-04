import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/",
//   baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-type": "application/json",
  },
});
