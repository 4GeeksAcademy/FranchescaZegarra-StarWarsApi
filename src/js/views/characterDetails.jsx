import React, {useEffect, useContext} from "react";
import NavHeader from "../component/NavHeader.jsx";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/detailsPages.css";

export const CharacterDetail = () => {

    const params = useParams();
    const {store, actions} = useContext(Context);

    useEffect( () => {
        actions.seeCharacterDetails(params.theid);
    },[])

    const handleImageError = (e) => {
        e.target.src = "https://cdn.beacons.ai/user_content/Syj5d9h5aueYbMaN6Tn0Tamwm3E2/profile_notmystarwars.png"
    }

    return (
        <>
            <NavHeader />
            <main className="container">
                <section className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img className="detail-img" 
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} 
                        alt={`image ${params.theid}`} onError={handleImageError}
                        />  
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="text-white">Description of the character soon</p>
                    </div>
                </section>
                <hr className="text-danger"/>
                <section className="row text-center special-section">
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Name</p>
                        <p>{store.characterDetails.name}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Birth Year:</p>
                        <p>{store.characterDetails.birth_year}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Gender</p>
                        <p>{store.characterDetails.gender}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Height</p>
                        <p>{store.characterDetails.height}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Skin Color</p>
                        <p>{store.characterDetails.skin_color}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Eyecolor</p>
                        <p>{store.characterDetails.eye_color}</p>
                    </div>
                </section>
            </main>  
        </>
    );
};