import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BannerInicial from './BannerInicial';

describe('<BannerInicial />', () => {
  test('it should mount', () => {
    render(<BannerInicial />);

    const bannerInicial = screen.getByTestId('BannerInicial');

    expect(bannerInicial).toBeInTheDocument();
  });
});