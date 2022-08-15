import React from "react";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import AnimatedPage from "./AnimatedPage";
import Container from "./Container";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Card from "./Card";

import { fetchHeros, fetchHerosBase } from "../libs/utils";

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHerosBase()
      .then((data) => setHeroes(data.data.results))
      .catch((err) => console.error(err));
  }, []);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;
    
    try {
      setIsLoading(true);
      return await fetchHeros(args)
      .then((data) => setHeroes(data.data.results))
            .catch((err) => setError(err)
            );
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
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
    <AnimatedPage>
    <Container>
      
      
      <div className="title">
        <h1>Search any hero from the multiverse : </h1>
      </div>
      <SearchBar
        handleClick={handleClick}
        
      />
      
      {isLoading ? <Loader /> : <Grid>{cards}</Grid>};
      
    </Container>
    </AnimatedPage>
  );
}
