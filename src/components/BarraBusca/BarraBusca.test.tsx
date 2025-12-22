import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BarraBusca from './BarraBusca';

test('renders BarraBusca', () => {
  render(<BarraBusca />);
  const input = screen.getByPlaceholderText('O que está procurando');
  expect(input).toBeInTheDocument();
});

test('shows error on invalid search', () => {
  render(<BarraBusca />);
  const input = screen.getByPlaceholderText('O que está procurando');
  const icon = screen.getByText('🔍');
  fireEvent.change(input, { target: { value: 'invalid' } });
  fireEvent.click(icon);
  expect(screen.getByText('Nada encontrado. Tente outra busca.')).toBeInTheDocument();
});