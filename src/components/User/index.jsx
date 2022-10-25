import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export function User({user}) {
  return (
    <div>
      <figure>
        <img src={user.avatar_url} alt="Avatar do usuário" />
      </figure>
      <p>{`Nome: ${user.login}`}</p>
      <NavLink to={`/profile/${user.login}`}>Ver Perfil</NavLink>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};
