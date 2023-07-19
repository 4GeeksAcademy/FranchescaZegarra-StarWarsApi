import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ScrollBox from "./ScrollBox.jsx";

const CharacterCard = () => {

    //To change favorite button color

    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.seeCharacters();
    }, [])

    const addFavorites = (item) => {
        const isFavorite = store.favorites.some(favorite => favorite.name === item.name);

        if (isFavorite) {
            actions.deleteFavorite(item.name);
        } else {
            actions.addFavorites(item);
        }
    }

    const handleImageError = (e) => {
        e.target.src = "https://cdn.beacons.ai/user_content/Syj5d9h5aueYbMaN6Tn0Tamwm3E2/profile_notmystarwars.png"
    }

    return (
        <ScrollBox>
                {store.characters.map((item, id) => (
                <div key={id} className="card">
    
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${id+1}.jpg`}
                        className="card-img-top" alt={`character 1`} onError={handleImageError}
                    />
                    <div className="card-body mx-0">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text m-0">Gender: {item.gender} </p>
                        <p className="card-text m-0">Hair: {item.hair_color}</p>
                        <p className="card-text">Eye color: {item.eye_color} </p>
                        <Link to={`/character-detail/${id+1}`}>
                            <button href="#" className="btn btn-outline-dark col-6"> Learn more</button>
                        </Link>
                        <button className="btn btn-outline-dark col offset-md-4" onClick={() => addFavorites(item)}>
                            <i className={`bi bi-suit-heart-fill ${store.favorites.some((favorite) => favorite.name === item.name) ? "text-danger" : ""}`}></i>
                        </button>
                    </div>
                </div>
                ))}
        </ScrollBox>            
    );
};
export default CharacterCard;