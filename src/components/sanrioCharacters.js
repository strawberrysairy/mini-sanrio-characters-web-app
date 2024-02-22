import React, {useContext} from "react";
import CharacterCard from "./characterCard";
import {CharacterContext} from "./characterContext";

const SanrioCharacters = () => {
    const { characterData: characters } = useContext(CharacterContext);

    return (
        <div>
            <h1 style={{color : '#f699cd'}}>♡Sanrio Characters♡</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}>
                {Object.values(characters).map((character, index) => (
                    <CharacterCard key={index} character={character} />
                ))}
            </div>
        </div>
    )
}

export default SanrioCharacters;
