import { render, screen } from '@testing-library/react';
import App from './App';

describe('Core Component',() => {
  test('render', () => {
    render(<App />);
    
    expect(screen.getAllByText(/Home/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/Weather/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/Welcome to the Albany Roller Derby/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/Upcoming Events/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/Latest News/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/What is Roller Derby/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/Our Sponsors/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/Gallery/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/Merchandise/i)).not.toHaveLength(0);
    expect(screen.getAllByText(/Contact Us/i)).not.toHaveLength(0);
  })
});
