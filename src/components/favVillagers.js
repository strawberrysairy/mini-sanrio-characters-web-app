import React, {useState, useEffect} from "react";
import axios from "axios";

const FavVillagers = () => {

    const [apiData, setApiData] = useState({});

    const getVillagers = async () => {
        try {
            await axios.get("http://acnhapi.com/v1/villagers/")
                .then(response => {
                    setApiData(response.data);
                });
        } catch (error) {
            console.log(`Unable to receive villager data: ${error}`);
        }

    }
    useEffect(() => {
        getVillagers()
    }, []);

    return (
        <div>
            <h1>
                My Favorite Villagers
            </h1>
        </div>
    )

}

export default FavVillagers;