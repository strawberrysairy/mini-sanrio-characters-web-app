import React, { useState, useEffect } from "react";
import FavPokemonCard from "./favPokemonCard";
import axios from 'axios';
const FavPokemonList = () => {

    // State for pokemon from PokeAPI
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const pikachuResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
                const mewResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/mew');

                setPokemonList([pikachuResponse.data, mewResponse.data]);

            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };
        // Call the function to fetch data when the component mounts
        fetchPokemonData();
    }, []); // Empty dependency array ensures that effect is only run once

    return (
        <div>
            <h1>Fav pokemon list</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>


                {/* Display pokemon from API */}
                {pokemonList.map((pokemon, index) => (
                    <FavPokemonCard
                        key={index}
                        pokemon={pokemon}
                        image={pokemon.sprites.front_default}
                    />
                ))}

            </div>
        </div>
    );
};


export default FavPokemonList;

