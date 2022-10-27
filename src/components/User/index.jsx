import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './style.css';
import {GithubLogo} from 'phosphor-react';

export function User({user}) {
  return (
    <div className="card">
      <div className="blob"></div>
      <img src={user.avatar_url} alt="Avatar do usuário" />
      <h2>{user.login}</h2>
      <nav>
        <NavLink to={`/profile/${user.login}`}>
          <GithubLogo size={28} color="#0d1117" weight="duotone" />
          Ver Perfil
        </NavLink>
      </nav>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};
