import React, { useEffect, useState } from "react";
import "./App.css";
import Receipe from "./Receipe";

const App = () => {
  const APP_ID = "421cddf3";
  const APP_KEY = "8669a58d56b846f262edc32f8570968a";

  const [receipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getReceipe();
  }, [query]);

  const getReceipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  };

  return (
    <div className="App">
      <h1>RECEIPE FINDER</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="receipe">
        {receipes.map((receipe) => (
          <Receipe
            key={receipe.recipe.label}
            title={receipe.recipe.label}
            calories={receipe.recipe.calories}
            image={receipe.recipe.image}
            ingredients={receipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
