import React, {useContext} from "react";
import { Context } from "../store/appContext";

const DropdownElement = () => {

    const {store, actions} = useContext(Context);

    const deleteFavorite = (name) => {
        actions.deleteFavorite(name);
    }

    return (
        <div className="d-flex dropdown">
            <a className="btn btn-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span className="btnNumber">{store.favorites.length}</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                {store.favorites.map((item, key) => (
                    <li key={key}>
                        <div className="d-flex">
                            <a className="dropdown-item" href="#">{item.name}</a>
                            <button type="button" className="btn" onClick={() => deleteFavorite(item.name)}> <i className="bi bi-trash-fill"></i> </button>
                        </div>
                    </li>
                ))}
                
            </ul>
        </div>
    );
};

export default DropdownElement;