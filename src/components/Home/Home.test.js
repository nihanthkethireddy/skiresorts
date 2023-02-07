import { shallow } from 'enzyme';
import { SkiPopup } from '../SkiPopup';
import { Home } from './Home';

describe('<Home /> with no props', () => {
  // const props = {
  //   deleteResort: jest.fn(),
  //   updateResort: jest.fn(),
  //   readOnly: true,
  //   setPopup: jest.fn(),
  //   resort: {
  //     img: null,
  //     name: 'Resort 1',
  //     runs: 100,
  //   }
  // }
  const container = shallow(<Home />);
  // const popup = shallow(<SkiPopup {...props} />)
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('Check if Add Resort button is rendered', () => {
    expect(container.find('button').length).toEqual(1);
  });

});