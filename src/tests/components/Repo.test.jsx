import React from 'react';
import {screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {renderWithRouter} from '../utils/render/renderWithRouter';
import {Repo} from '../../components/Repo';
import {repo} from '../mocks/repos';

describe('Componente Repo', () => {
  it('As informações do Repo devem estar presente', () => {
    renderWithRouter(<Repo repo={repo} />);

    const repoLanguage = screen.getByTestId('repo-language');
    const repoStars = screen.getByTestId('repo-stars');
    const repoWatchers = screen.getByTestId('repo-watchers');
    const repoForks = screen.getByTestId('repo-forks');
    const repoName = screen.getByTestId('repo-name');
    const repoLabel = screen.getByTestId('repo-label');

    expect(repoLanguage).toBeInTheDocument();
    expect(repoStars).toBeInTheDocument();
    expect(repoWatchers).toBeInTheDocument();
    expect(repoForks).toBeInTheDocument();
    expect(repoName).toBeInTheDocument();
    expect(repoLabel).toBeInTheDocument();
  });

  it('As informações do Repo devem corresponder ao Repositório passado', () => {
    renderWithRouter(<Repo repo={repo} />);

    const repoLanguage = screen.getByTestId('repo-language');
    const repoStars = screen.getByTestId('repo-stars');
    const repoWatchers = screen.getByTestId('repo-watchers');
    const repoForks = screen.getByTestId('repo-forks');
    const repoName = screen.getByTestId('repo-name');

    expect(repoLanguage).toHaveTextContent(repo.language);
    expect(repoStars).toHaveTextContent(repo.stargazers_count);
    expect(repoWatchers).toHaveTextContent(repo.watchers_count);
    expect(repoForks).toHaveTextContent(repo.forks_count);
    expect(repoName).toHaveTextContent(repo.name);
  });
});

