import React from 'react';
import { Card } from '../card/card.component';
import './card_list.styles.css';

export const CardList = props => (
    <div className="card-list">
        {props.pokemon.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon}/>
    ))}
    </div>
);