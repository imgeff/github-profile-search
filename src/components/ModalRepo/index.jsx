import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {formatDateToDefaultBrazil} from '../../helpers/Date';

export function ModalRepo({repo}) {
  const createdAt = formatDateToDefaultBrazil(repo.created_at);
  const updatedAt = formatDateToDefaultBrazil(repo.updated_at);
  return (
    <div className="modal-repo">
      <input
        type="checkbox"
        id={`modal-repo-${repo.name}`}
        className="daisy-modal-toggle"
      />
      <label
        htmlFor={`modal-repo-${repo.name}`}
        className="daisy-modal cursor-pointer"
      >
        <label className="daisy-modal-box relative" htmlFor="">
          <div className="modal-extra-infos">
            {repo.license && (
              <span data-testid="modal-repo-license">
                {repo.license.name }
              </span> )}
            <div className="modal-info-dates" data-testid="modal-repo-dates">
              <span>
                {`Criado em: `}
                <span>{createdAt}</span>
              </span>
              <span>
                {`Última atualização: `}
                <span>{updatedAt}</span>
              </span>
            </div>
            <ul data-testid="modal-repo-topics">
              {repo.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </div>
          <h3
            className="text-lg font-bold"
            data-testid="modal-repo-name"
          >
            {repo.name}
          </h3>
          <p
            className="py-4"
            data-testid="modal-repo-description"
          >
            {repo.description ? repo.description : 'Sem descrição'}
          </p>
          <a
            data-testid="modal-repo-link"
            href={repo.html_url}
            rel='noreferrer'
            target="_blank"
          >
            Ir até o github
          </a>
        </label>
      </label>
    </div>
  );
}

ModalRepo.defaultProps = {
  licence: null,
};

ModalRepo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    html_url: PropTypes.string,
    license: PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      spdx_id: PropTypes.string,
      url: PropTypes.string,
      node_id: PropTypes.string,
    }),
    topics: PropTypes.arrayOf(PropTypes.string),
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
};
