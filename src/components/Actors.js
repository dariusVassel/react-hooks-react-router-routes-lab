import React from "react";
import { render } from "react-dom";
import { actors } from "../data";

function Actors() {
  console.log(actors)
  const renderActors = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <ul>
          Movies:
          {actor.movies.map((movie) => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>

    )
  })
  return <div>
    <h1>Actors Page</h1>
    {renderActors}
  </div>;
}

export default Actors;
