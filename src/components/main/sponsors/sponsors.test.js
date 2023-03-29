import { render, screen } from '@testing-library/react';
import Sponsors from './sponsors';

describe('Sponsors component',() => {
  test('render', () => {
    render(<Sponsors />);
    
    expect(screen.getByText(/Sponsors/i)).toBeInTheDocument();
  })
});
