import { render, screen } from '@testing-library/react';
import Main from './main';

describe('Main component',() => {
  test('render', () => {
    render(<Main />);
    
    expect(screen.getByText("Main")).toBeInTheDocument();
  })
});
