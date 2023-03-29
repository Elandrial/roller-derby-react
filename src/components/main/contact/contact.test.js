import { render, screen } from '@testing-library/react';
import Contact from './contact';

describe('Sponsors component',() => {
  test('render', () => {
    render(<Contact />);
    
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  })
});
