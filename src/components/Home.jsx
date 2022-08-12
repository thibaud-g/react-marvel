import React from "react";

import { useState, useEffect } from "react";

import Container from "./Container";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Card from "./Card";

import { fetchHeros, fetchHerosBase } from "../libs/utils";

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchHerosBase()
      .then((data) => setHeroes(data.data.results))
      .catch((err) => console.error(err));
  }, []);

  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;
    
    try {
      return await fetchHeros(args)
      .then((data) => setHeroes(data.data.results))
            .catch((err) => setError(err));
    } catch (err) {
      return err;
    }
  };

  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        key={hero.id}
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
        description={hero.description ? hero.description : "No description"}
      />
    ));
  }

  return (
    <Container>
      <div className="title">
        <h1>Search any hero from the multiverse : </h1>
      </div>
      <SearchBar
        handleClick={handleClick}
        
      />
      <h2>Results</h2>
      <Grid>{cards ? cards : null}</Grid>
    </Container>
  );
}
