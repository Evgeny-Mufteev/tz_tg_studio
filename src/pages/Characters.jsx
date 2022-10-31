import React from "react";

import HeroesItem from "../components/HeroesItem";
import Sort from "../components/Sort";
import Heropopup from "../components/Heropopup";

const Characters = () => {
  const [heroes, setHeroes] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [popupHeroes, popupSetHeroes] = React.useState({});
  // filter
  const [search, setSearch] = React.useState("");
  const [checked, setChecked] = React.useState("all");
  // end filter

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((arrayHeroes) => {
        setHeroes(arrayHeroes.results);
      });
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  const onOpenModal = (obj = null) => {
    if (typeof obj === "object") {
      setOpen(obj);
    }
  };

  const array = React.useMemo(() => {
    const key = search.toLowerCase().trim();
    if (search.trim().length || checked) {
      const f1 = checked === "all" ? heroes : heroes.filter((obj) => obj.gender === checked);
      return f1.filter((obj) => obj.name.toLowerCase().trim().includes(key));
    } else {
      return heroes;
    }
  }, [heroes, search, checked]);

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

          <Search value={search} onSearch={setSearch} />

          <Sort checked={checked} setChecked={setChecked} />

          <div className="heroes">
            {array.map((obj) => (
              <HeroesItem
                popupHeroes={popupHeroes}
                popupSetHeroes={popupSetHeroes}
                onOpenModal={() => onOpenModal(obj)}
                key={obj.url}
                {...obj}
              />
            ))}
          </div>
        </div>
      </section>
      {open ? (
        <Heropopup
          heroes={open}
          onClose={onClose}
          popupHeroes={popupHeroes}
          popupSetHeroes={popupSetHeroes}
        />
      ) : null}
    </>
  );
};

const Search = ({ value = "", onSearch = () => {} }) => {
  const onChange = (event) => {
    onSearch(event.target.value);
  };

  //
  return (
    <div className="search-root">
      <input
        className="search-root__input"
        type="text"
        placeholder="find..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Characters;
