import { render, screen } from '@testing-library/react';
import App from './App';

describe('Core Component',() => {
  test('render', () => {
    render(<App />);
    
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Weather")).toBeInTheDocument();
    expect(screen.getByText("Welcome to the Albanmy Roller Derby")).toBeInTheDocument();
    expect(screen.getByText("Upcoming Events")).toBeInTheDocument();
    expect(screen.getByText("Latest News")).toBeInTheDocument();
    expect(screen.getByText("What is Roller Derby")).toBeInTheDocument();
    expect(screen.getByText("Our Sponsors")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Merchandise")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  })
});
