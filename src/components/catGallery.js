import React from "react";
import axios from "axios";

const CatGallery = () => {
    const apiKey = "live_FD7n6ezQHvonComM68QiXIDSsTwaEPkImThWPzCklqieVjn8wZahqrNpbQ6LqErG";

    const [breed, setBreed] = React.useState("Not a cat");
    const [origin, setOrigin] = React.useState("N/A");
    const [img, setImg] = React.useState("");
    const [affection, setAffection] = React.useState(0);
    const [shortLegs, setShortLegs] = React.useState(0);
    const getCatName = async (key) => {
        try {
            await axios.get("https://api.thecatapi.com/v1/images/search?breed_ids=beng", {
                headers: {
                    "x-api-key": key
                }
            })
                .then(response => {
                    const { data } = response;
                    setBreed(data[0]?.breeds[0]?.name); // ? are a safe call in case the value returns undefined
                    setImg(data[0]?.url); // so the program doesn't break
                    setOrigin(data[0]?.breeds[0]?.origin)
                    setAffection(data[0]?.breeds[0]?.affection_level);
                    setShortLegs(data[0]?.breeds[0]?.short_legs);
                    /* Data you are requesting from payload,
                    everything else is just needed to receive data from the response
                    */
                });
        } catch (error) {
            console.log(`Server doesn't like you :(\nhere's what it said: ${error}`);
        }
    }

    React.useEffect(() => {
        getCatName(apiKey);
    }, []);

    return (
        <div>
            <p>He's a {breed}</p>
            <p>he comes from {origin}</p>
            <p>{affection >= 5 ? "He's very affectionate! :)" : "He's not very affectionate. :("}</p>
            <p>{shortLegs == 1 ? `He's got very short legs! :O` : "He ain't got short legs hehehe ;0"}</p>
            <img src={img} />
        </div>
    )
}

export default CatGallery;
