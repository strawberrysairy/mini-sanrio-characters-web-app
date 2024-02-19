import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterCard from "./characterCard";

const SanrioCharacters = () => {
    const [characters, setCharacters] = useState({});

    const getSanrioCharacters = async () => {
        try {
            axios.get("https://sanrioapi.onrender.com/App/Characters")
                .then(response => {
                    const { data } = response
                    Object.values(data).map((character) => {
                        character.img = character?.img.split("/revision")[0]
                    })
                    setCharacters(data);
                });
        } catch (error) {
            console.log(`Error receiving Sanrio character data: ${error}`)
        }
    }
    useEffect(() => {
        getSanrioCharacters();
    }, []);


    return (
        <div>
            <h1 style={{color : '#f699cd'}}>♡Sanrio Characters♡</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}>
                {Object.values(characters).map((character) => (
                        <CharacterCard
                            character={character}
                        />
                    )
                )}
            </div>

        </div>
    )
}


export default SanrioCharacters;