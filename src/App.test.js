import { render, screen } from '@testing-library/react';
import {Todo } from 'Todo';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
