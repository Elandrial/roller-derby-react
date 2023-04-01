import { render, screen } from '@testing-library/react';
import Contact from './contact';
import registerIcons from '../../../utility/fontawesomeicons/fontawesomeicons';

registerIcons();

describe('Sponsors component',() => {
  test('render', () => {
    render(<Contact />);
    
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  })
});
