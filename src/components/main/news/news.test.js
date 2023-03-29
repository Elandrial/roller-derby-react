import { render, screen } from '@testing-library/react';
import News from './news';

describe('News component',() => {
  test('render', () => {
    render(<News />);
    
    expect(screen.getByText("Latest News")).toBeInTheDocument();
  })
});
