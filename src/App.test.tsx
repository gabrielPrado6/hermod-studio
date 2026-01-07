import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hermod Studio', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hermod Studio/i);
  expect(linkElement).toBeInTheDocument();
});
