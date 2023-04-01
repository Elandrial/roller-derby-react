import PageButton from './pagebutton';
import renderer from 'react-test-renderer';

describe('PageButton component',() => {
  it('Page 1, current button renders correctly', () =>{
    const tree = renderer
    .create(<PageButton currentPage={1} pageNumber={1} ariaName="Events" hiddenLG={false} hiddenMD={false} hiddenSM={false} hiddenXS={false}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  })

  it('Page 2, not current button renders correctly', () =>{
    const tree = renderer
    .create(<PageButton currentPage={1} pageNumber={2} ariaName="Events" hiddenLG={false} hiddenMD={false} hiddenSM={false} hiddenXS={false}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  })

  it('Page 6, not current button renders correctly, hidden on LG, MD', () =>{
    const tree = renderer
    .create(<PageButton currentPage={1} pageNumber={6} ariaName="Events" hiddenLG={true} hiddenMD={true} hiddenSM={false} hiddenXS={false}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
});