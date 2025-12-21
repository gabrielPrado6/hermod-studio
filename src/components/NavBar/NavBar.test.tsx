import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('renders NavBar', () => {
  test('it should mount', () => {
    render(<NavBar show={true} />);
    const navBar = screen.getByTestId('NavBar');
    expect(navBar).toBeInTheDocument();
  });
});