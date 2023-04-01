import { render, screen } from '@testing-library/react';
import Navigation from './navigation';
import registerIcons from '../../utility/fontawesomeicons/fontawesomeicons';

registerIcons();

describe('Navigation component',() => {
  test('render', () => {
    render(<Navigation />);
    
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  })
});
