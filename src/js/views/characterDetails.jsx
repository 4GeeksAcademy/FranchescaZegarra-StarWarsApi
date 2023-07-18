import React from "react";
import NavHeader from "../component/NavHeader.jsx";
import GeneralDetail from "../component/GeneralDetail.jsx";
import { useParams } from "react-router";
//import { useSelector } from "react-redux";

export const CharacterDetail = () => {

    let {uid} = useParams();

    return (
        <>
            <NavHeader />
            <GeneralDetail imgUrl={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} description={"some description"}/>
            <section className="row text-center">
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Name</p>
                    <p>Character1</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Bird Year:</p>
                    <p>1985</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Gender</p>
                    <p>Character1</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Height</p>
                    <p>Character1</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Skin Color</p>
                    <p>Character1</p>
                </div>
                <div className="col-lg-2 col-sm-2 col-6 text-danger">
                    <p className="fw-bold m-0">Eyecolor</p>
                    <p>Character1</p>
                </div>
            </section>
        </>
    );
};