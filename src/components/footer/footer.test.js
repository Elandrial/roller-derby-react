import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer component',() => {
  test('render', () => {
    render(<Footer />);
    
    expect(screen.getByText("Albany Roller Derby League 2023")).toBeInTheDocument();
  })
});
