import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import ScrollBox from "./ScrollBox.jsx";

const CharacterCard = () => {

    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.seeCharacters()
    }, [])

    return (
        <ScrollBox>

                {store.characters.map((item, id) => (
                <div key={id} className="card" style={{width: "18rem", flex:"none", margin: "10px"}} >       
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id+1}.jpg`} className="card-img-top" alt={`character 1`} />
                    <div className="card-body mx-0">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text m-0">Gender: {item.gender} </p>
                        <p className="card-text m-0">Hair: {item.hair_color}</p>
                        <p className="card-text">Eye color: {item.eye_color} </p>
                        <Link to={`/character-detail/${id+1}`}>
                            <button href="#" className="btn btn-outline-primary col-6"> Learn more</button>
                        </Link>
                        <button className="btn btn-outline-dark col offset-md-4"> <i className="bi bi-suit-heart-fill"></i> </button>
                    </div>
                </div>
                ))}
        </ScrollBox>            
    );
};
export default CharacterCard;