import React from "react";

const FavPokemonCard = ({pokemon}) => {
    return (
        <div style = {{ border : '1px solid #ccc', padding: '10px', margin: '10px', width: '200px'}}>
            <h3>{pokemon.name}</h3>
            <p>{pokemon.id}</p>
        </div>
    )
}

export default FavPokemonCard;