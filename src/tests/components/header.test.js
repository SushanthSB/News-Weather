import React from 'react';
import Header from '../../components/header'
import renderer from 'react-test-renderer'

it('Heder should render without breaking', () => {
	const tree = renderer.create(
			<nav className='navbar navbar-default navbar-fixed-top'>
						<h1 className='brand'>Daily News</h1>
			</nav>
		).toJSON();
	expect(tree).toMatchSnapshot();
})