import { render, screen } from '@testing-library/react';
import About from './about';

describe('About component',() => {
  test('render', () => {
    render(<About />);
    
    expect(screen.getByText("What is Roller Derby")).toBeInTheDocument();
  })
});
