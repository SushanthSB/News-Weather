import React from 'react';
import '../styles/news.css';
import PropTypes from 'prop-types';
 
 //News component- Fetches and displays news.
const News = (props) => {

	const news = () => {
		return (
				props.fetch.data.map((news, index) => {
					return (
						<div className='panel panel-default news-default col-xs-12 col-sm-12 col-md-12 col-lg-12' key={index}>
							<a href={news.url} className='col-xs-12 col-sm-12 col-md-12 col-lg-12' >
								<div className='news-img col-xs-2 col-sm-2 col-md-2 col-lg-2' >
									<img src={news.urlToImage} alt={news.urlToImage} />
								</div>
								<div className='col-xs-9 col-xs-offset-1 col-sm-9 col-md-9 col-lg-9' >
									<div className='panel-heading news-title' > {news.title} </div>
									<div className='panel-body news-body' > {news.description} </div>
								</div>
							</a>
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