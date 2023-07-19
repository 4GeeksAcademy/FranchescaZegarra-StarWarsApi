import React, { useContext, useEffect } from "react";
import NavHeader from "../component/NavHeader.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import "../../styles/detailsPages.css";

export const VehicleDetails = () => {

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
                        src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`} 
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
                        <p>{store.vehiclesDetails.name}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Model</p>
                        <p>{store.vehiclesDetails.model}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Length</p>
                        <p>{store.vehiclesDetails.length}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Crew</p>
                        <p>{store.vehiclesDetails.crew}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Passengers</p>
                        <p>{store.vehiclesDetails.passengers}</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-6 text-danger">
                        <p className="fw-bold m-0">Consumables</p>
                        <p>{store.vehiclesDetails.consumables}</p>
                    </div>
                </section>
            </main>
        </>
    );
};