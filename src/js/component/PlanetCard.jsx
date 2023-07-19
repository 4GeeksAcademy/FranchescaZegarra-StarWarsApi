import React, { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import ScrollBox from "./ScrollBox.jsx";
import { Link } from "react-router-dom";

const PlanetCard =() => {
    const {store, actions} = useContext(Context);

    useEffect (() => {
        actions.seePlanets();
    },[])

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
        {
            store.planets.map((item, id) => (
                <div key={id} className="card">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id+1}.jpg`}
                    className="card-img-top" alt={`planet ${id+1}`} onError={handleImageError}/>
                    <div className="card-body mx-0">
                        <h5 className="card-title">{item.name}</h5>
                        <div style={{minHeight: "72px"}}>
                            <p className="card-text m-0">Population: {item.population} </p>
                            <p className="card-text">Terrain: {item.terrain} </p>  
                        </div>
                       
                        <Link to={`/planet-detail/${id+1}`}>
                            <button href="#" className="btn btn-outline-primary col-6"> Learn more</button>
                        </Link>
                        <button className="btn btn-outline-dark col offset-md-4" onClick={() => addFavorites(item)}>
                            <i className={`bi bi-suit-heart-fill ${store.favorites.some((favorite) => favorite.name === item.name) ? "text-danger" : ""}`}></i>
                        </button>
                    </div>
                </div> 
            ))
        }   
        </ScrollBox>
                      
    );
};

export default PlanetCard;