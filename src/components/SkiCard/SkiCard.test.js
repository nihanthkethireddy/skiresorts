import { shallow } from 'enzyme';
import { SkiCard } from './SkiCard';

const props = {
  deleteResort: jest.fn(),
  setPopup: jest.fn(),
  resort: {
    img: null,
    name: 'Resort 1',
    runs: 100
  }
}
describe('<SkiCard /> with props', () => {
  const container = shallow(<SkiCard {...props} />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('Check if Edit and Delete buttons are rendered in SkiCard', () => {
    expect(container.find('button').length).toEqual(2);
  });

  it('Check if the image tag is rendered in SkiCard', () => {
    expect(container.find('img').length).toEqual(1);
  });

});