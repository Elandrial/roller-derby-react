import { render, screen } from '@testing-library/react';
import Menu from './menu';
import registerIcons from '../../../utility/fontawesomeicons/fontawesomeicons';

registerIcons();

describe('Menu component',() => {
  test('render', () => {
    render(<Menu />);
    
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  })
});
