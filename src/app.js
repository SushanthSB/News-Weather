import React from 'react'
import Header from './components/header'
import SubHeader from './components/sub-header'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Menu from './components/menu'
import {Weather} from './components/weather'
import { dataFetch, weatherFetch } from './actions/'
import { bindActionCreators } from 'redux'
import SubMenu from './components/sub-menu'
import News from './components/news';

export class App extends React.Component {
  componentDidMount() {
    this.props.weatherFetch() // Call weatherFetch() action to fetch weather on mount
    const devWidth=(this.navElement.clientWidth) //Get navbar width
    const margin = (Math.floor(devWidth/2)-60);//Animate brand name to center on scroll
    if(devWidth > 736) { 
      this.menuBarElement.className=""
      this.menuElement.className="nav nav-tabs"
      window.addEventListener('scroll',() => {
          this.handleScroll(margin)
        })
    }
  }

  handleScroll(margin) {
    if(window.pageYOffset >= 265) {
      this.headerBrandElement.style.marginLeft=margin+"px"
      this.headerBrandElement.style.transition="all 1s"; 
    }
    else {
      this.headerBrandElement.style.marginLeft="150px"
      this.headerBrandElement.style.transition="all 1s"; 
    }
  }
  render() {
    return (
      <div className="App">
        <Header headerBrandRef={(headerBrand) => this.headerBrandElement=headerBrand} navRef={(nav) => this.navElement = nav} />
        <SubHeader news_source={this.props.news_source} />
        <Menu menuRef={(menu) => this.menuElement=menu} menuBar={(menuBar) => this.menuBarElement = menuBar} category={this.props.category} subCategory={this.props.subCategory} handleTerm={this.props.dataFetch} menu={this.props.menu} />
        <SubMenu subCategory={this.props.subCategory} menu={this.props.menu} handleTerm={this.props.dataFetch} />
        <News fetch={this.props.fetch} />
        <Weather weather={this.props.weather} />
      </div>
    );
  }
}

App.propTypes = {
  news_source: PropTypes.array.isRequired,
  category: PropTypes.array.isRequired,
  subCategory: PropTypes.array.isRequired,
  menu: PropTypes.object.isRequired,
  fetch: PropTypes.object.isRequired,
  dataFetch: PropTypes.func,
  weatherFetch: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return {
		news_source: state.news_source,
    category: state.category,
    subCategory: state.subCategory,
    menu: state.menuReducer,
    fetch: state.fetchReducer,
    weather: state.weatherReducer
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dataFetch: bindActionCreators(dataFetch, dispatch),
    weatherFetch: bindActionCreators(weatherFetch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
