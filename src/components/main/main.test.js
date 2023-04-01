import { render, screen } from '@testing-library/react';
import Main from './main';
import registerIcons from '../../utility/fontawesomeicons/fontawesomeicons';

registerIcons();

describe('Main component',() => {
  test('render', () => {
    render(<Main />);
    
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  })
});
