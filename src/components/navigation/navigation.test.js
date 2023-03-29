import { render, screen } from '@testing-library/react';
import Navigation from './navigation';

describe('Navigation component',() => {
  test('render', () => {
    render(<Navigation />);
    
    expect(screen.getByText("Navigation")).toBeInTheDocument();
  })
});
