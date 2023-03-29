import { render, screen } from '@testing-library/react';
import Gallery from './gallery';

describe('Gallery component',() => {
  test('render', () => {
    render(<Gallery />);
    
    expect(screen.getByText("Gallery")).toBeInTheDocument();
  })
});
