import React from "react";
import "../../styles/home.css";
import NavHeader from "../component/NavHeader.jsx";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import ScrollBox from "../component/ScrollBox.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const context = useContext(Context);

	return (
		<div className="container">
			<NavHeader />
			<h2>Characters</h2>
			<ScrollBox>
				{
					context.store.characters.map((element,key)=>{
						return (
							<CharacterCard key={key} id={element.uid} />
						)
					})
				}
				
			</ScrollBox>
			<br />
			<h2>Characters</h2>
			<ScrollBox>
				<PlanetCard id={11} />
			</ScrollBox>			
		</div>
	)
};
