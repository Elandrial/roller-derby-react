import { render, screen } from '@testing-library/react';
import Weather from './weather';

describe('Weather component',() => {
  test('render', () => {
    render(<Weather />);
    
    expect(screen.getByText(/Weather/i)).toBeInTheDocument();
  })
});
