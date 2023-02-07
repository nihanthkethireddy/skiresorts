import { shallow } from 'enzyme';
import { Home } from './Home';

describe('<Home /> with no props', () => {
  const container = shallow(<Home />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('Check if Add Resort button is rendered', () => {
    expect(container.find('button').length).toEqual(1);
  });

});