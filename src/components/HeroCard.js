import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3 " style={{ maxWidth: 540 }}>
      <div className="row no-glutters">
        <div className="col-md-4">
          <img
            src={`./assets/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </div>
        <div  className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {(alter_ego !== characters) && <p className="card-text">{characters}</p>}

        </div>
      </div>
      <p className="card-text">
            <small className="text-muted" >{first_appearance}</small>
        </p>
        <Link to={`./hero/${id}`} className="m-3">
        mas...
        </Link>

    </div>
  );
};
