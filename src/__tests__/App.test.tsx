import { render, screen } from '@testing-library/react';
import App from '../App';

// simple smoke test
test('renders FanDuel header', () => {
  render(<App />);
  const fanduelElement = screen.getByText(/FanDuel/i);
  expect(fanduelElement).toBeInTheDocument();
});

test("renders today's games section", () => {
  render(<App />);
  const gamesElement = screen.getByText(/Today's Games/i);
  expect(gamesElement).toBeInTheDocument();
});
