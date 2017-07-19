import React from 'react';
import '../styles/sub-menu.css'
import PropTypes from 'prop-types'

class SubMenu extends React.Component {
	handleClick(term,subterm) {
		this.props.handleTerm(term,subterm)
	}
	subCategory() {
		var arr=this.props.subCategory[0][this.props.menu.term];
		if(arr) {
			return (
				arr.map((submenu,index) => {
					return <li key={index} 
					className={(this.props.menu.subterm === submenu)?'active':'in-active'} 
					onClick={this.handleClick.bind(this, this.props.menu.term, submenu)} >
					<a>{submenu}</a>
					</li>
				})
			)
		}
	}
	render() {
		return (
				<ul className='nav nav-pills submenu' >{this.subCategory()}</ul>
			)
	}
}

SubMenu.propTypes = {
  subCategory: PropTypes.array.isRequired,
  menu: PropTypes.object.isRequired,
  handleTerm: PropTypes.func
}

export default SubMenu;