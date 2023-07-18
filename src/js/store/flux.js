import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			seeCharacters: () => {
				const store = getStore();
				
				fetch('https://www.swapi.tech/api/people')
				.then(response => { return response.json()})
				.then(data=> {
					setStore({...store, characters: data.results});
				})
				.catch(error => console.log(error));
			},

			seeCharacterDetails: (data) => {
				const store = getStore();
				store.characterDetails.push(data);
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
