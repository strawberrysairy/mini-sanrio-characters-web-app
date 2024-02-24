import React from "react";
import axios from "axios";
import { CharacterContext } from "./characterContext";
import addedSanrioProps from "./addedSanrioProps";

export function CharacterProvider({ children }) {
    const [characterData, setCharacterData] = React.useState([]);

    const mergeObjectsByName = (ogSanrioApiList, addedSanrioList) => {
        const mergedSanrioList = [];

        ogSanrioApiList.forEach(ogSanrioApiObj => {
            if (ogSanrioApiObj.name == "Aggresive Retsuko") {
                ogSanrioApiObj = {...ogSanrioApiObj, name: "Aggretsuko"};
            }
            addedSanrioList.forEach(addedSanrioListObj => {
                if (ogSanrioApiObj.name === addedSanrioListObj.realName) {
                    mergedSanrioList.push({ ...ogSanrioApiObj, ...addedSanrioListObj });
                }
            });
        });
        return mergedSanrioList;
    };

    const getSanrioCharacters = async () => {
        try {
            axios.get("https://sanrioapi.onrender.com/App/Characters")
                .then(response => {
                    const {data} = response;
                    Object.values(data).map((character) => {
                        character.img = character?.img.split("/revision")[0];
                        return character;
                    })
                    setCharacterData(mergeObjectsByName(data, addedSanrioProps));
                });
        } catch (error) {
            console.log(`Error receiving Sanrio character data: ${error}`)
        }
    };

    React.useEffect(() => {
        getSanrioCharacters();
    }, []);

    return(
        <CharacterContext.Provider value={{ characterData, setCharacterData }}>
            {children}
        </CharacterContext.Provider>
    );
}
