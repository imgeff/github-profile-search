import React, {useState, useEffect} from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import {Search} from '../../components/Search';
import {User} from '../../components/User';
import {getUsers} from '../../requests';
import './style.css';

export function Explore() {
  const [users, setUsers] = useState([]);
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const colorPurple = '#A67BF2';

  async function getAllUsers() {
    const response = await getUsers();
    setUsers(response);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (typeof users[0] === 'string') {
      setDisplayErrorMessage(true);
    } else {
      setDisplayErrorMessage(false);
    }
  }, [users]);

  if (users.length > 0) {
    return (
      <div className="container-explore">
        <Search
          placeholder="Digite o nome do perfil que deseja buscar"
          endpoint="https://api.github.com/users"
          setValue={setUsers}
        />
        <h3>Explorar</h3>
        {displayErrorMessage ? <p className='error-message'>{users[0]}</p> : (
          <ul className="user-list">
            { users.map((user) => (
              <li key={ user.id }>
                <User user={user} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="load">
      <InfinitySpin width="200" color={colorPurple} />
    </div>
  );
}
