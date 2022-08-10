import React from "react";

import { useState } from "react";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid"
import Card from "../components/Card";

import { fetchHeroes } from "../lib/utils";

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();

  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;

    try {
      return await fetchHeroes(args);
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
      />
    ));
  }

  return (
    <Container>
      <div className="title">
        <h1>Use the Marvel API</h1>
      </div>
      <SearchBar
        handleClick={handleClick}
        setter={setHeroes}
        setError={setError}
      />
      <h2>Results</h2>
      <Grid>{cards ? cards : null}</Grid>
    </Container>
  );
}