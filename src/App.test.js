import { render, screen } from '@testing-library/react';
import App from './App';

// Up until now, we have done manual testing
// I called it "no excuses" testing
// Now we will use a framework
// framework is called jest
// We are no longer testing JS, we are testing
//    ecma script
// Ecma Script is a combination of JS and JSX

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is the main App/i);
  expect(linkElement).toBeInTheDocument();
});
