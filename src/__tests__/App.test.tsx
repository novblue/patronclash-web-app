import { render, screen } from '@testing-library/react';
import App from '../App';

// simple smoke test
test('renders PatronClash header', () => {
  render(<App />);
  const patronClashElement = screen.getByText(/PatronClash/i);
  expect(patronClashElement).toBeInTheDocument();
});

test("renders today's games section", () => {
  render(<App />);
  const gamesElement = screen.getByText(/Today's Games/i);
  expect(gamesElement).toBeInTheDocument();
});
