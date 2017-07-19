import Category from '../../reducers/category';

it("Data shouldn't change",() => {
	expect(Category()).toMatchSnapshot();
})