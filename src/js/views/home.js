import React from "react";
import "../../styles/home.css";
import NavHeader from "../component/NavHeader.jsx";
import CharacterCard from "../component/CharacterCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const context = useContext(Context);

	return (
		<>
			
			<NavHeader />
			<div className="container">
				<h2>Characters</h2>
				<CharacterCard />
				<br />
				<h2>Vehicles</h2>
				<VehicleCard />
				<br />
				<h2>Planets</h2>
				<PlanetCard />
			</div>
		</>
	)
};
