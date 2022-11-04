import React from 'react';
import {screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {renderWithRouter} from '../utils/render/renderWithRouter';
import {Search} from '../../components/Search';

describe('Componente Search', () => {
  const placeholder = 'Digite o nome do perfil que deseja buscar';
  const endpoint = 'https://api.github.com/users';

  it('Deve existir um botão e um input de busca', () => {
    renderWithRouter(<Search placeholder={placeholder} endpoint={endpoint} />);

    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('Deve ser impossível pesquisar algo sem digitar no input', () => {
    renderWithRouter(<Search placeholder={placeholder} endpoint={endpoint} />);

    const searchButton = screen.getByTestId('search-button');

    expect(searchButton).toBeDisabled;
  });
});

