import React from "react";
import NavHeader from "../component/NavHeader.jsx";
import GeneralDetail from "../component/GeneralDetail.jsx";

export const PlanetDetails = () => {
    return (
        <>
            <NavHeader />
            <GeneralDetail imgUrl={"https://starwars-visualguide.com/assets/img/planets/2.jpg"} description={"Some description"} />
            <section className="row text-center">
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Name</p>
                    <p>Planet1</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Climate</p>
                    <p>1985</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Population</p>
                    <p>Planet1</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Orbital Periot</p>
                    <p>Planet1</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Rotation Periot</p>
                    <p>Planet1</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Diameter</p>
                    <p>Planet1</p>
                </div>
            </section>
        </>
    );
};