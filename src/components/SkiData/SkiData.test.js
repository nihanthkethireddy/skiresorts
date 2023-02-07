import { shallow } from 'enzyme';
import { SkiData } from './SkiData';

const props = {
  updateResort: jest.fn(),
  readOnly: false,
  setPopup: jest.fn(),
  resort: {
    id: 1,
    img: null,
    name: 'Resort 1',
    runs: 100
  }
}
describe('<SkiData /> with ReadOnly View', () => {
  const container = shallow(<SkiData {...props} />);
  console.log(container.html(),'+++++++++++++++++++++++++==')
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should contain the webcam component', () => {
    expect(container.find('div.cam').length).toEqual(1);
  });

  it('should contain Save button', () => {
    expect(container.find('button[type="submit"]').length).toEqual(1);
  });


  // it('Check if Edit and Delete buttons are rendered in SkiCard', () => {
  //   expect(container.find('button').length).toEqual(2);
  // });

  // it('Check if the image tag is rendered in SkiCard', () => {
  //   expect(container.find('img').length).toEqual(1);
  // });

});