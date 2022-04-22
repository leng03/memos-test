import { render, screen } from '@testing-library/react';
import Login from './Login';

test('should show username and password inputs', () => {
  render(<Login />);
  const usernameElement = screen.getByPlaceholderText(/Username/);
  expect(usernameElement).toBeInTheDocument();
  const passwordElement = screen.getByPlaceholderText(/Password/);
  expect(passwordElement).toBeInTheDocument();
});
