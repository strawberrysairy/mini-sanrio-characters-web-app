import React from "react";
import mochaIcon from "../resources/mochaIcon.png"

const CharacterCard = ({ character }) => {
    return (
        <div
            style ={{
                borderColor: '#ffb3de',
                border : "1px solid #ccc", // Adds border to card
                padding: "10px", // Space between text/image and card edge on all sides
                margin: "5px",
                marginTop: "20px",
                marginBottom: "40px",
                width: "300px",
                borderRadius: "20px" // gives the card curved/circular edges
        }}>
            <h3 style={{color: '#fa86c4'}}>{character.name}</h3>
            <img
                src={character.img}
                style={{width: "200px", height: "200px", borderRadius: "10px"}}
            />
            <p style={{color: '#fa86c4'}}>Short description</p>
        </div>
    )
}

export default CharacterCard;