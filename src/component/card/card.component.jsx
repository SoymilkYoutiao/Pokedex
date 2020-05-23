import React from 'react';

import './card.style.css';

export const Card = props => (
      <div className="card-container">
        <img alt="pokemon"
        src={`https://robohash.org/${props.pokemon.id}?set=set2&size=180x180`}
        ></img>
        <h2>{props.pokemon.name}</h2>
        <h2>{props.pokemon.id}</h2>
        <p>{props.pokemon.email}</p>
      </div>
);