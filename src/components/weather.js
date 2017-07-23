import React from 'react';
import '../styles/weather.css';
import PropTypes from 'prop-types';

//weather component that fetches and diplays weather 
export const celToFar = (val) => {
	return ((val*1.8+32).toFixed(2))
}

export const today = () => {
	const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
	return days[new Date().getDay()].toUpperCase();
}

export const Weather = (props) => {
		return(
				<div className=''>
				<h3 className='weather-brand'>Weather</h3>
				<div className='jumbotron weather-div1 col-md-3 col-lg-3' >
					<div className='city-name col-xs-12 col-sm-12 col-md-12 col-lg-12'>
						<h3>{props.weather.data.long_name}</h3>
					</div>
					<div className='weather-div2 col-xs-12 col-sm-12 col-md-12 col-lg-12' >
						<table className='col-xs-12 col-sm-12 col-md-12 col-lg-12 weather-table' >
							<thead>
								<tr>
									<th colSpan='2'>{today()}</th>
								</tr>
							</thead>
							<tbody>
								<tr className='temp'>
									<td colSpan='2' className='temp-img'><img src={'http://openweathermap.org/img/w/'+props.weather.weather.icon+'.png'} alt={props.weather.weather.description} />
									<span>{Math.floor(props.weather.temp.temp)}</span></td>
								</tr>
								<tr className='temp-desc' >
									<td colSpan='2'>{props.weather.weather.description}</td> 
								</tr>
								<tr className='temp-rem' >
									<td>Temp:</td> 
									<td>{props.weather.temp.temp}&#8451; | {celToFar(props.weather.temp.temp)}&#8457;</td>
								</tr>
								<tr className='temp-rem'>
									<td>Min|Max:</td> 
									<td>{props.weather.temp.temp_min}&#8451; | {props.weather.temp.temp_max}&#8451;</td>
								</tr>
								<tr className='temp-rem'>
									<td>Min|Max:</td>
									<td>{celToFar(props.weather.temp.temp_min)}&#8457; | {celToFar(props.weather.temp.temp_max)}&#8457;</td>
								</tr>
								<tr className='temp-rem'>
									<td>Humidity</td>
									<td>{props.weather.temp.humidity}%</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				</div>
			)
}

Weather.propTypes = {
	weather: PropTypes.object.isRequired
}