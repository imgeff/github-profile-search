import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './style.css';

export function User({user}) {
  return (
    <div className="card" data-testid="card-profile">
      <img
        data-testid="img-profile"
        src={user.avatar_url}
        alt="Avatar do usuário"
      />
      <div>
        <h2 data-testid="name-profile">{user.login}</h2>
        <nav>
          <NavLink to={`/profile/${user.login}`} data-testid="link-profile">
            Ver Perfil
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};
