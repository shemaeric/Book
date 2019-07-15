import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../App';

describe('<Routes />', () => {
    test('Should render the Routes', () => {
      const routes = shallow(<App />);
      expect(routes).toMatchSnapshot();
    });
})