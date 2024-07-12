import { render, screen } from '@testing-library/react';
import App from '../components/App.tsx';

describe('<App />', () => {
  test('it should contain the heading', () => {
    render(<App />);
    const heading = screen.getByText(/Hello there/i);
    expect(heading).toBeInTheDocument();
  });
});
