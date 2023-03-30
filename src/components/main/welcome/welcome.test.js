import { render, screen } from '@testing-library/react';
import Welcome from './welcome';

describe('Welcome component',() => {
  test('render', () => {
    render(<Welcome />);
    
    expect(screen.getByText(/Welcome to the Albany Roller Derby/i)).toBeInTheDocument();
  })
});
