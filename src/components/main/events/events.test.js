import { render, screen } from '@testing-library/react';
import Events from './events';

describe('Events component',() => {
  test('render', () => {
    render(<Events />);
    
    expect(screen.getByText("Upcoming Events")).toBeInTheDocument();
  })
});
