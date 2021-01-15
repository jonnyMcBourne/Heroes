import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "querystring";

//selectors
import { getheroesByName } from "../../selectors/getHeroeByName";
//components
import { HeroCard } from "../../components/HeroCard";
//custom hooks
import { useForm } from "../../hooks/useForm";

/*

s
*/
export const SearchScreen = ({ history, location }) => {
  //state
  const [{ text }, handleInputChange, reset] = useForm({ text: "" });
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const locationhook = useLocation();
  const trimmed = locationhook.search.substring(1);
  const parsed = queryString.parse(trimmed);
  const { q } = parsed;

  useEffect(() => {
    if (text === "") {
      setValue(q);
    }
  }, [text,q]);

  useEffect(() => {
    if (text === "") {
      setIsDisabled(true);
      setValue(text);
      reset();
    } else {
      setIsDisabled(false);
      setValue(text);
    }
  }, [text,reset]);

  //data
  const heroesFiltered = getheroesByName(q);

  const findHero = (e) => {
    e.preventDefault();
    history.push(`?q=${text}`);
    reset();
  };

  return (
    <>
      <div className="row">
        <div className="col-5">
          <form onSubmit={findHero}>
            <input
              className="form-control"
              type="text"
              placeholder="Find your Hero"
              name="text"
              value={value}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button
              className="btn btn-outline-primary btn-block mt-3"
              disabled={isDisabled}
            >
              Find
            </button>
          </form>
        </div>
        <div className="col-7">
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
