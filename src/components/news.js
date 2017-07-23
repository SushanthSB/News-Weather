import React from 'react';
import '../styles/news.css';
import PropTypes from 'prop-types';
 
 //News component- Fetches and displays news.
const News = (props) => {

	const news = () => {
		return (
				props.fetch.data.map((news, index) => {
					return (
						<div className='panel panel-default news-default' key={index}>
							<a href={news.url} ><div className='panel-heading news-title' > {news.title} </div>
							<div className='panel-body news-body' > {news.description} </div></a>
						</div>
					)
				})
			)
		}

	return(
			<div className='panel-group news-group col-xs-12 col-sm-12 col-md-8 col-md-offset-1 col-lg-8 col-lg-offset-1' >
				<h3 className='top-stories'>Top Stories</h3>
				{news()}
			</div>
		)
}

News.propTypes = {
	fetch: PropTypes.object.isRequired
}

export default News;