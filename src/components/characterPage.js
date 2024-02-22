import React, { useContext } from "react";
import { useParams } from 'react-router-dom';

import { CharacterContext } from "./characterContext";

const CharacterPage = () => {
    const { pageName } = useParams();
    const { characterData } = useContext(CharacterContext);

    // Locate the character whose page we're on
    const character = characterData.find(character => convertToCamelCase(character.name) == convertToCamelCase(pageName));

    if (!character) {
        return <div>No character found with name: {pageName}</div>;
    }

    return(
        <div>
            <h1>{character.realName}</h1>
            <img src={character.img}/>
            <h2>Attributes</h2>
            <ul>
                <li>{character.birthday}</li>
                <li>{character.debut_year}</li>
                <li>creator</li>
            </ul>
            <p>{character.longDesc}</p>
        </div>
    )
}

const convertToCamelCase = (givenName) => {
    if (givenName.includes(" ")) {
        const firstName = givenName.split(" ")[0].toLowerCase();
        const unfixedSecondName = givenName.split(" ")[1];
        const secondName = unfixedSecondName[0].toUpperCase() + unfixedSecondName.slice(1).toLowerCase();
        return (firstName + secondName);
    } else if (givenName.includes("-")){
        const firstName = givenName.split("-")[0].toLowerCase();
        const unfixedSecondName = givenName.split("-")[1];
        const secondName = unfixedSecondName[0].toUpperCase() + unfixedSecondName.slice(1).toLowerCase();
        return (firstName + secondName);
    }
    else {
        const fixedName = givenName.toLowerCase()
        return fixedName;
    }
}

export default CharacterPage;