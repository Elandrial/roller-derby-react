import Pager from './pager';
import renderer from 'react-test-renderer';

describe('Pager component',() => {
  it('renders correctly', () =>{
    const tree = renderer
    .create(<Pager pages={9} currentPage={1} ariaName="Events" maxMainButtons={5} maxSideButtonsMD={1} maxSideButtonsLG={2}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
});