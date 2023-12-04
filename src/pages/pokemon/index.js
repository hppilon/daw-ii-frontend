import api from "@/services/api";
import { useEffect, useState } from "react";
export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  function getPokemons() {
    api
      .get("pokemon?limit=10")
      .then((result) => {
        console.log("result: ", result.data);
        setPokemons(result.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log("Alteração na variável pokemons: ", pokemons);
  }, [pokemons]);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      {pokemons?.length > 0 && pokemons.map((pokemon) => <p>{pokemon.name}</p>)}
    </div>
  );
}
