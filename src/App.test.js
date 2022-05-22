import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import App from './App';
=======
import App from './Components/App';
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
