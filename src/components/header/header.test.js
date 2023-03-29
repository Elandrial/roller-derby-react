import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header component',() => {
  test('render', () => {
    render(<Header />);
    
    expect(screen.getByText("Weather")).toBeInTheDocument();
  })
});
