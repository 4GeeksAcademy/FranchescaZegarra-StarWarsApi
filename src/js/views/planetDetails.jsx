import React, { useContext, useEffect } from "react";
import NavHeader from "../component/NavHeader.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import "../../styles/detailsPages.css";

export const PlanetDetails = () => {

    const params = useParams();
    const {store, actions} = useContext(Context);

    useEffect( () => {
        actions.seeVehicleDetails(params.id);
    }, []);

    const handleImageError = (e) => {
        e.target.src = "https://cdn.beacons.ai/user_content/Syj5d9h5aueYbMaN6Tn0Tamwm3E2/profile_notmystarwars.png"
    }

    return (
        <>
            <NavHeader/>
            <main className="container">
                <section className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img className="detail-img" 
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} 
                        alt={`image ${params.theId}`} onError={handleImageError}
                        />  
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="text-white">This will have some description soon</p>
                    </div>
                </section>
                <hr className="text-danger"/>
                <section className="row text-center special-section">
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Name</p>
                        <p>{store.planetDetails.name}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Climate</p>
                        <p>{store.planetDetails.climate}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Population</p>
                        <p>{store.planetDetails.population}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Orbital Period</p>
                        <p>{store.planetDetails.orbital_period}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Rotation Period</p>
                        <p>{store.planetDetails.rotation_period}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Diameter</p>
                        <p>{store.planetDetails.diameter}</p>
                    </div>
                </section>
            </main>
        </>
    );
};