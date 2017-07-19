import React from 'react';
import PropTypes from 'prop-types'

class Menu extends React.Component {

	handleClick(term) {
		this.props.handleTerm(term,this.props.subCategory[0][term][0])
	}
	
	category() {
		return (
				this.props.category.map((name, index) => {
					return (<li key={index} className={(this.props.menu.term === name.name) ? 'active':'not-active'} onClick={this.handleClick.bind(this, name.name)} ><a>{name.name}</a></li>)
				})
			)
	}
	
	componentDidMount() {
		//console.log(this.props.subCategory[0]['General'][0])
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