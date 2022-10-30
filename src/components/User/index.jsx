import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './style.css';

export function User({user}) {
  console.log(user);
  return (
    <div className="card">
      <img src={user.avatar_url} alt="Avatar do usuário" />
      <div>
        <h2>{user.login}</h2>
        <nav>
          <NavLink to={`/profile/${user.login}`}>
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
