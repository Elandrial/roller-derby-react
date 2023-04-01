import ArticlePanel from './articlepanel';
import renderer from 'react-test-renderer';

describe('Pager component',() => {
  it('renders correctly', () =>{
    let testData = [{
        "id":2,
        "title":"Integer laoreet ex nec purus posuere",
        "date":"1st April 2022",
        "description":"Nullam maximus efficitur dapibus. Nulla facilisi. Proin mollis enim quis efficitur elementum. Nullam eget gravida quam. Vivamus vel urna vestibulum, aliquam ligula tempor, congue augue.",
        "image": "derby-program.jpg"
    }];
    const tree = renderer
    .create(<ArticlePanel jsondata={testData} ariaName={"Test"} recordsPerPage={3}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
});