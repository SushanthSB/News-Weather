import { combineReducers } from 'redux';
import NewsSource from './news-source';
import Category from './category'
import SubCategory from './sub-category'
import MenuReducer from './menu-reducer'
import FetchReducer from './fetch-reducer'
import WeatherReducer from './weather-reducer'

export default combineReducers({
	news_source : NewsSource,
	category: Category,
	subCategory: SubCategory,
	menuReducer: MenuReducer,
	fetchReducer: FetchReducer,
	weatherReducer: WeatherReducer
})