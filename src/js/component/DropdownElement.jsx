import React from "react";

const DropdownElement = () => {
    return (
        <>
            <div className="d-flex">
                <a className="dropdown-item" href="#">Favorite 1</a>
                <button type="button" className="btn"> <i className="bi bi-trash-fill"></i> </button>
            </div>
        </>
    );
};

export default DropdownElement;