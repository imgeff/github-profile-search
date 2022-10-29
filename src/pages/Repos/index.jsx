import React, {useEffect, useState} from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import {useParams} from 'react-router-dom';
import {Repo} from '../../components/Repo';
import {genericGetRequest} from '../../requests';
import './style.css';

export function Repos() {
  const {user} = useParams();
  const [repos, setRepos] = useState([]);
  const colorPurple = '#A67BF2';

  async function getRepos() {
    const response = await genericGetRequest(`https://api.github.com/users/${user}/repos`);
    setRepos(response);
  }


  useEffect(() => {
    getRepos();
  }, []);

  if (repos) {
    return (
      <div className="repos-container">
        <h1>{`${repos.length} Repositórios de ${user}`}</h1>
        <div className="repos">
          {repos.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="load">
      <InfinitySpin width="200" color={colorPurple} />
    </div>
  );
}
