import axios from 'axios';
//import {getPosition} from 'redux-effects-geolocation';
export const ACTIVATION = 'ACTIVATION';
export const FETCH = 'FETCH'

export function dataFetch(term, subterm) {
	//var url = axios.get('https://newsapi.org/v1/articles?source='+subterm.toLowerCase().replace(/ /g, "-")+'&sortBy=top&apiKey=9e576fda31f24e398aad8fb08270f59f')
	return dispatch => {
		dispatch({type:ACTIVATION, term: term, subterm: subterm})
		return axios({
			method:'get',
			url:'https://newsapi.org/v1/articles?source='+subterm.toLowerCase().replace(/ /g, "-")+'&sortBy=top&apiKey=9e576fda31f24e398aad8fb08270f59f',
			
		})
		.then((response) => {
			dispatch({type:FETCH, payload:response.data})
		}).catch((err) => {
			console.log(err)
		})
	}
}

/*export function handleMenu(term,subterm) {
	return {
		type: 'ACTIVATION',
		term: term,
		subterm: subterm,
	}
}

export function handleSubMenu(subterm) {
	return {
		type: 'SUB_ACTIVATION',
		payload: subterm
	}
}*/

export function weatherFetch() {
	return dispatch => {
		navigator.geolocation.getCurrentPosition((position) => {
			axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&key=AIzaSyA2Rs8dJMWejN29GpDu_V6Jqq_rxu7eIOY')
				.then((response) => {
					dispatch({type:'CITY', payload:response.data.results[0].address_components})
				})
			axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&APPID=bd5e378503939ddaee76f12ad7a97608')
				.then(response => {
					dispatch({type:'WEATHER', payload:response.data})
				})
		});
	}
}
