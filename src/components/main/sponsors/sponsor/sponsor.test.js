import Sponsor from './sponsor';
import renderer from 'react-test-renderer';

describe('Pager component',() => {
  it('renders correctly', () =>{
    const tree = renderer
    .create(<Sponsor imageUrl={"testimage.jpg"} name={"test"}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
});