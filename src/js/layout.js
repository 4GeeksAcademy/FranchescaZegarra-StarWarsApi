import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { CharacterDetail } from "./views/characterDetails.jsx";
import { PlanetDetails}  from "./views/planetDetails.jsx";
import { StoreWrapper } from "./store/appContext.js"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		
		<BrowserRouter basename={basename}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/character-detail/:theid" element={<CharacterDetail />} />
				<Route path="/planet-detail/:id" element={<PlanetDetails />} />
				<Route path="*" element={<h1>Not found!</h1>} />
			</Routes>
		</BrowserRouter>
	
	);
};

export default injectContext(Layout);
