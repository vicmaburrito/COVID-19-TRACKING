import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configStore';

import CountryDetail from '../Components/Countries/Country_detail';

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><CountryDetail /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
