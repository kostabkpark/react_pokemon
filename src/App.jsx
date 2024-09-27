import { useState, useEffect } from "react";

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20000")
    .then((response) => response.json())
    .then((json) => {
      setData(json.results);
      setIsLoading(false);
      console.log(json.results);
    });
  }, []);
    
  return (
    <>
      <div>
        <h1>Poketmons!</h1>
 
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <select onChange= {}>
              {data.map((pokemon) => (
                <option value={pokemon.url}>{pokemon.name}</option>
              ))}
            </select>
          )}
          <img src="" alt="pokemon" />
      </div>
    </>
  );
}

export default App;
