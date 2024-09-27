import { useState, useEffect } from "react";

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState([]);
  const [img, setImg] = useState("");
  const imgChange = (e) => {
    console.log(e.target.value);
    fetch(e.target.value)
      .then(response => response.json())
      .then(json => 
        {
          console.log(json.sprites.front_default)
          setImg(json.sprites.front_default);
        }
      )
  }

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
            <select onChange={imgChange}>   
              {data.map((pokemon) => (
                <option key={pokemon.name} value={pokemon.url}>{pokemon.name}</option>
              ))}
            </select>
          )}
          <img src={img} alt="pokemon" />
      </div>
    </>
  );
}

export default App;
