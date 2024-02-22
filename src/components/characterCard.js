import React from "react";
import { Link, useParams } from "react-router-dom";
import mochaIcon from "../resources/mochaIcon.png";

const CharacterCard = ({ character }) => {
    const params = useParams();

    return (
        <Link to={`/${character.pageName}`} style={{ textDecoration: 'none'}}>
            <div
                style={{
                    borderColor: '#ffb3de',
                    border: "1px solid #ccc", // Adds border to card
                    padding: "10px", // Space between text/image and card edge on all sides
                    margin: "5px",
                    marginTop: "20px",
                    marginBottom: "40px",
                    width: "300px",
                    borderRadius: "20px" // gives the card curved/circular edges
                }}>
                <h3 style={{color: '#fa86c4'}}>{character.name == "Aggresive Retsuko" ? character.nickName : character.name}</h3>
                <img
                    src={character.img}
                    style={{width: "200px", height: "200px", borderRadius: "10px"}}
                />
                <p style={{color: '#fa86c4'}}>{character.shortDesc}</p>
            </div>
        </Link>
    )
}

export default CharacterCard;