import React, {useState, useEffect} from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import {User} from '../../components/User';
import {getItemLocalStorage} from '../../helpers/LocalStorage';
import './style.css';

export function Favorites() {
  const [favoriteUsers, setFavoriteUsers] = useState();
  const colorPurple = '#A67BF2';

  function getFavoriteUsers() {
    const users = getItemLocalStorage('favoriteUsers');
    setFavoriteUsers(users);
  }

  useEffect(() => {
    getFavoriteUsers();
  }, []);

  if (favoriteUsers) {
    return (
      <div className="container-explore container-favorites">
        <h3>Favoritos</h3>
        <ul className="user-list">
          { favoriteUsers.map((user) => (
            <li key={ user.id }>
              <User user={user} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="load">
      <InfinitySpin width="200" color={colorPurple} />
    </div>
  );
}
