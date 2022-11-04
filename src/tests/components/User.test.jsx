import React from 'react';
import {screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {renderWithRouter} from '../utils/render/renderWithRouter';
import {User} from '../../components/User';
import {user} from '../mocks/users';

describe('Componente User', () => {
  it('Deve existir foto, nome e link para ver perfil', () => {
    renderWithRouter(<User user={ user.data } />);

    const imgProfile = screen.getByTestId('img-profile');
    const nameProfile = screen.getByTestId('name-profile');
    const linkProfile = screen.getByTestId('link-profile');

    expect(imgProfile).toBeInTheDocument();
    expect(nameProfile).toBeInTheDocument();
    expect(linkProfile).toBeInTheDocument();
  });

  it('A foto e o nome devem corresponder ao perfil renderizado', () => {
    renderWithRouter(<User user={ user.data } />);

    const nameProfile = screen.getByTestId('name-profile');
    const imgProfile = screen.getByTestId('img-profile');

    expect(imgProfile).toHaveAttribute('src', `https://avatars.githubusercontent.com/u/${user.data.id}?v=4`);
    expect(nameProfile).toHaveTextContent(user.data.login);
  });

  it('O link deve levar para a página de perfil', () => {
    renderWithRouter(<User user={ user.data } />);

    const linkProfile = screen.getByTestId('link-profile');

    expect(linkProfile).toHaveAttribute('href', `/profile/${user.data.login}`);
  });
});

