import React from "react";
import "../../styles/generalDetail.css";

const GeneralDetail = ({imgUrl, description}) => {
    return (
        <main className="container">
            <section className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="detail-img" src={imgUrl} alt="image 1" />  
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p>{description}</p>
                </div>
            </section>
            <hr className="text-danger"/>
        </main>
    );
};

export default GeneralDetail;