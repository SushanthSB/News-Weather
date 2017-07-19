import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { dataFetch,weatherFetch, ACTIVATION, FETCH } from '../../actions/';
import nock from 'nock';
import moxios from 'moxios'

const middlewares = [thunk]
const mockstore = configureMockStore(middlewares);

describe('Async actions',()=>{
	beforeEach(() => {
		moxios.install()
	})
	afterEach(() => {
		nock.cleanAll();
		moxios.uninstall()
	})
	const term='General'
	const subterm='abc-news-au'
	it('fetch data and dispatch appropriate action',() => {
		nock('https://newsapi.org')
		.get('/v1/articles?source='+subterm.toLowerCase().replace(/ /g, "-")+'&sortBy=top&apiKey=9e576fda31f24e398aad8fb08270f59f')
		.reply(200,{
			"status":"ok",
			"source":"the-hindu",
			"sortBy":"top",
			"articles":[{"name":"hindu"}]
		})

		const expectedActions = [
			{type:ACTIVATION, term: term, subterm: subterm},
			{type:FETCH, payload:{articles:[{"name":"hindu"}]}}
		]

		const store = mockstore({ articles:[] })

		store.dispatch(dataFetch(term, subterm)).then((response) => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
	/*it("fetch client's place based on lattitude and longitude",() => {
		nock('https://maps.googleapis.com')
		.get('/maps/api/geocode/json?latlng=13.0538372, 77.5032899&key=AIzaSyA2Rs8dJMWejN29GpDu_V6Jqq_rxu7eIOY')
		.reply(200,{
			"results": [
				{
               		"long_name" : "9th B Cross Road",
               		"short_name" : "9th B Cross Road",
               		"types" : [ "route" ]
            	}
			]
		})
		const expectedActions = [
			{type:'CITY', payload: {"results":[{'long_name':'Bangalore'}]}}
		]
		const store = mockstore({ results:[] })

		store.dispatch(weatherFetch()).then((response) => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})*/
}) 