import React from "react";

import HeroesItem from "../components/HeroesItem";
import Sort from "../components/Sort";
import Heropopup from "../components/Heropopup";

const Characters = () => {
  const [heroes, setHeroes] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [popupHeroes, popupSetHeroes] = React.useState({});

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        return response.json();
      })
      .then((arrayHeroes) => {
        setHeroes(arrayHeroes.results);
      });
  }, []);

  return (
    <>
      <section className="characters">
        <div className="container">
          <div className="language-select">
            <p>language: en</p>
          </div>
          <h2 className="page__title">
            60 <b>Peoples</b> for you to choose your favorite
          </h2>

          <div className="search-root">
            <input className="search-root__input" type="text" placeholder="find..." />
          </div>

          <Sort />

          <div className="heroes">
            {heroes.map((obj) => (
              <HeroesItem
                setOpen={setOpen}
                popupHeroes={popupHeroes}
                popupSetHeroes={popupSetHeroes}
                onClick={() => setOpen(true)}
                key={obj.url}
                {...obj}
              />
            ))}
          </div>
        </div>
      </section>
      <Heropopup
        open={open}
        setOpen={setOpen}
        popupHeroes={popupHeroes}
        popupSetHeroes={popupSetHeroes}
      />
    </>
  );
};

export default Characters;
