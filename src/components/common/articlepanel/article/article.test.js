import Article from './article';
import renderer from 'react-test-renderer';

describe('Pager component',() => {
  it('renders correctly', () =>{
    const tree = renderer
    .create(<Article id={-1} title={"test case"} date={"1st April 2023"} description={"test example"} image={"derby-program.jpg"}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
});