import React from "react";


const capitalize = (name) => {
    return name[0].toUpperCase() + name.slice(1);
}
const FavPokemonCard = ({pokemon, image}) => {

    const name = capitalize(pokemon.name)

    return (
        <div style = {{ border : '1px solid #ccc', padding: '10px', margin: '10px', width: '200px'}}>

            <h3>{name}</h3>
            <p>{pokemon.id}</p>
            <img src={image} alt={pokemon.name}/>
        </div>
    )
}

export default FavPokemonCard;