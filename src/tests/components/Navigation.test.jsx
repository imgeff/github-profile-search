import React from 'react';
import {screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {renderWithRouter} from '../utils/render/renderWithRouter';
import {Navigation} from '../../components/Navigation';

describe('Componente Navigation', () => {
  it('Deve existir o link de explorar e o de favoritos', () => {
    renderWithRouter(<Navigation />);

    const exploreLink = screen.getByTestId('link-explore');
    const favoritesLink = screen.getByTestId('link-favorites');

    expect(exploreLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });

  it('Os links devem redirecionar para paǵina de Explorar e Favoritos', () => {
    renderWithRouter(<Navigation />);

    const exploreLink = screen.getByTestId('link-explore');
    const favoritesLink = screen.getByTestId('link-favorites');

    expect(exploreLink).toHaveAttribute('href', '/explore');
    expect(favoritesLink).toHaveAttribute('href', '/favorites');
  });
});

