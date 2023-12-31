import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails:{},
			vehicles:[],
			vehiclesDetails: {},
			planets: [],
			planetDetails: {},
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			seeCharacters: async() => {
				try{
					const response = await fetch('https://swapi.dev/api/people/');
					const data = await response.json();
					setStore({characters: data.results});
				} catch(error){
					console.log(error);
				}
			},

			seeCharacterDetails: async(id) => {
				try{
					const response = await fetch('https://swapi.dev/api/people/'+id);
					const data = await response.json();
					setStore({characterDetails: data});
				} catch(error) {
					console.log(error);
				}
			},

			seeVehicles: async() =>{
				try{
					const response = await fetch('https://swapi.dev/api/starships/');
					const data = await response.json();
					setStore({vehicles: data.results})
				} catch(error) {
					console.log(error);
				}
			},

			seeVehicleDetails: async(id) => {
				try{
					const response = await fetch('https://swapi.dev/api/starships/'+id);
					const data = await response.json();
					setStore({vehiclesDetails: data});
				} catch(error) {
					console.log(error);
				}
			},

			seePlanets: async() => {
				try{
					const response = await fetch('https://swapi.dev/api/planets/');
					const data = await response.json();
					setStore({planets: data.results});
				} catch(error) {
					console.log(error);
				}
			},

			seePlanetDetails: async(id) => {
				try {
					const response = await fetch('https://swapi.dev/api/planets/'+id);
					const data = await response.json();
					setStore({planetDetails: data})
				} catch(error) {
					console.log(error)
				}
			},

			addFavorites: (item) => {
				const store = getStore();
				const newFavorites = [...store.favorites, item]
				setStore({ favorites: newFavorites });
			},

			deleteFavorite: (name) => {
				const store = getStore();
				const newFavorites = store.favorites.filter(favorite => favorite.name !== name)
				setStore({favorites: newFavorites});
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
