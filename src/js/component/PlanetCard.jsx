import React, { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import ScrollBox from "./ScrollBox.jsx";
import { Link } from "react-router-dom";

const PlanetCard =({id}) => {
    const {store, actions} = useContext(Context);

    useEffect (() => {
        actions.seePlanets();
    },[])

    return (
        <ScrollBox>
        {
            store.planets.map((item, id) => (
                <div key={id} className="card">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id+1}.jpg`} className="card-img-top" alt={`planet ${id+1}`} />
                    <div className="card-body mx-0">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text m-0">Population: {item.population} </p>
                        <p className="card-text">Terrain: {item.terrain} </p>
                        <Link to={`/planet-detail/${id+1}`}>
                            <button href="#" className="btn btn-outline-primary col-6"> Learn more</button>
                        </Link>
                        <button className="btn btn-outline-dark col offset-md-4"> <i className="bi bi-suit-heart-fill"></i> </button>
                    </div>
                </div> 
            ))
        }   
        </ScrollBox>
                      
    );
};

export default PlanetCard;