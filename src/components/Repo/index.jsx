import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Eye, GitFork, Star} from 'phosphor-react';
import {ModalRepo} from '../ModalRepo';

export function Repo({repo}) {
  const colorPurple = '#A67BF2';

  return (
    <div className="repo">
      <header className="repo-header">
        <span>{repo.language}</span>
        <div>
          <span title="Stargazers">
            <Star size={16} color={colorPurple} weight="duotone" />
            {repo.stargazers_count}
          </span>
          <span title="Watchers">
            <Eye size={16} color={colorPurple} weight="duotone" />
            {repo.watchers_count}
          </span>
          <span title="Forks">
            <GitFork size={16} color={colorPurple} weight="duotone" />
            {repo.forks_count}
          </span>
        </div>
      </header>
      <h2>{repo.name}</h2>
      <label
        htmlFor={`modal-repo-${repo.name}`}
      >
        Ver mais
      </label>
      <ModalRepo repo={repo} />
    </div>
  );
}

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number,
    watchers_count: PropTypes.number,
    forks_count: PropTypes.number,
  }).isRequired,
};
