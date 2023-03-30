import { render, screen } from '@testing-library/react';
import Merchandise from './merchandise';

describe('Merchandise component',() => {
  test('render', () => {
    render(<Merchandise />);
    
    expect(screen.getByText(/Merchandise/i)).toBeInTheDocument();
  })
});
