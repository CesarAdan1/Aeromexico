import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test("render component", () => {
    const {getByTestId} = render(<App />)
    const app = getByTestId("card")
    expect(app).toBeDefined()
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
