import React from 'react';
import PropTypes from 'prop-types'

// Menu component - displays menu list(General, Business, Technology etc...)
class Menu extends React.Component {

	handleClick(term) {
		//call dataFetch action via parent component
		this.props.handleTerm(term,this.props.subCategory[0][term][0])
	}
	
	category() {
		return (
				this.props.category.map((name, index) => {
					//make className active if clicked item and diplayed item in the corresponding list are same
					return (<li key={index} className={(this.props.menu.term === name.name) ? 'active':'not-active'} onClick={this.handleClick.bind(this, name.name)} ><a>{name.name}</a></li>)
				})
			)
	}
	
	componentDidMount() {
		// call dataFetch aciton with default value 'General'
		this.props.handleTerm('General',this.props.subCategory[0]['General'][0]);
	}

	render() {
		return (
				<ul className='nav nav-tabs'>{this.category()}</ul>
			)
	}
}

Menu.propTypes = {
  category: PropTypes.array.isRequired,
  subCategory: PropTypes.array.isRequired,
  menu: PropTypes.object.isRequired,
} 

export default Menu