import React, { useState, useEffect } from "react";
import FavPokemonCard from "./favPokemonCard";
import axios from 'axios';
const FavPokemonList = () => {
    const [favPokemonList, setFavPokemonList] = useState([
        // useState is used here for the user to add or remove pokemon from the list
        {
            id: 4,
            name: 'Pikachu'
        },
        {
            id: 6,
            name: 'Mew'
        },
    ]);
    // State for pokemon from PokeAPI
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
                const data = response.data.results;
                setPokemonList(data);
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
                {favPokemonList.map((pokemon) => (
                    <FavPokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                }

                {/* Display pokemon from API */}
                {pokemonList.map((pokemon, index) => (
                    <FavPokemonCard key={index} pokemon={pokemon} />
                ))}

            </div>
        </div>
    );
};


export default FavPokemonList;

