import { render, screen } from '@testing-library/react';
import Menu from './menu';

describe('Menu component',() => {
  test('render', () => {
    render(<Menu />);
    
    expect(screen.getByText("Home")).toBeInTheDocument();
  })
});
