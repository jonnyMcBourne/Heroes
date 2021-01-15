import React,{useMemo} from "react";
import { Redirect, useParams } from "react-router-dom";

////
import { getHeroById } from "../../selectors/getHerobyId";

export const HeroeScreen = ({ history }) => {
  const { heroid } = useParams();
  const hero = useMemo(() => getHeroById(heroid), [heroid]);



  if (!hero) {
    return <Redirect to="/" />;
  }
  //goBack button
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("./");
    } else {
      history.goBack();
    }
  };
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img
          src={`../assets/${heroid}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <ul className="list-group lis-group-flush">
          <li className="list-group-item">
            <span className="text-bold">Alter Ego: </span> {alter_ego}{" "}
          </li>
          <li className="list-group-item">
            <span className="text-bold">Publisher: </span> {publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <span className="text-bold"> First appearance: </span>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">characters</h5>
        <p>{characters}</p>
        <button onClick={handleReturn} className="btn btn-outline-info">
          Return
        </button>
      </div>
    </div>
  );
};
