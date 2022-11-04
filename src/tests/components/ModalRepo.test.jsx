import React from 'react';
import userEvent from '@testing-library/user-event';
import {screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {renderWithRouter} from '../utils/render/renderWithRouter';
import {Repo} from '../../components/Repo';
import {repo} from '../mocks/repos';

describe('Componente ModalRepo', () => {
  it('Um modal deve aparecer ao clicar no botão de Ver mais', () => {
    renderWithRouter(<Repo repo={repo} />);

    const repoLabel = screen.getByTestId('repo-label');
    userEvent.click(repoLabel);

    const modalRepoName = screen.getByTestId('modal-repo-name');
    const modalRepoDescription = screen.getByTestId('modal-repo-description');
    const modalRepoTopics = screen.getByTestId('modal-repo-topics');
    const modalRepoDates = screen.getByTestId('modal-repo-dates');
    const modalRepoLink = screen.getByTestId('modal-repo-link');

    expect(modalRepoName).toBeInTheDocument();
    expect(modalRepoDescription).toBeInTheDocument();
    expect(modalRepoTopics).toBeInTheDocument();
    expect(modalRepoDates).toBeInTheDocument();
    expect(modalRepoLink).toBeInTheDocument();
  });

  it('As informações do modal deve corresponder ao repositório passado', () => {
    renderWithRouter(<Repo repo={repo} />);
    const {name, description} = repo;

    const repoLabel = screen.getByTestId('repo-label');
    userEvent.click(repoLabel);

    const modalRepoName = screen.getByTestId('modal-repo-name');
    const modalRepoDescription = screen.getByTestId('modal-repo-description');

    expect(modalRepoName).toHaveTextContent(name);
    expect(modalRepoDescription)
        .toHaveTextContent(description ? description : /Sem Descrição/i);
  });

  it('O link do modal do repositório deve levar ao github', () => {
    renderWithRouter(<Repo repo={repo} />);

    const repoLabel = screen.getByTestId('repo-label');
    userEvent.click(repoLabel);

    const modalRepoLink = screen.getByTestId('modal-repo-link');

    expect(modalRepoLink).toHaveAttribute('href', repo.html_url);
  });
});
