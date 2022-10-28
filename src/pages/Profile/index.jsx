import {
  Archive,
  Buildings,
  EnvelopeSimple,
  GithubLogo,
  Link,
  MapPin,
  Star,
} from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import {NavLink, useParams} from 'react-router-dom';
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from '../../helpers/LocalStorage';
import {genericGetRequest} from '../../requests';
import './style.css';

export function Profile() {
  const {user} = useParams();
  const [profile, setProfile] = useState();
  const [favoriteUsers, setFavoriteUsers] = useState([]);
  const [weightFavorite, setWeightFavorite] = useState('regular');
  const colorPurple = '#A67BF2';

  async function getUserProfile() {
    const response = await genericGetRequest(`https://api.github.com/users/${user}`);
    setProfile(response);
  }

  function getFavoriteUsers() {
    const favoriteUsersLocalStorage = getItemLocalStorage('favoriteUsers');
    if (favoriteUsersLocalStorage !== null && profile !== undefined) {
      setFavoriteUsers(favoriteUsersLocalStorage);
      const profileIsPresent = favoriteUsersLocalStorage
          .some((profileLocalStorage) => (
            profileLocalStorage.login === profile.login));
      profileIsPresent ? setWeightFavorite('fill') : (
        setWeightFavorite('regular'));
    }
  }

  function saveAsFavorite() {
    if (weightFavorite == 'regular') {
      setWeightFavorite('fill');
      favoriteUsers.push(profile);
      setItemLocalStorage('favoriteUsers', favoriteUsers);
    } else {
      setWeightFavorite('regular');
      favoriteUsers.pop();
      setItemLocalStorage('favoriteUsers', favoriteUsers);
    }
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    getFavoriteUsers();
  }, [profile]);

  if (profile) {
    return (
      <div className="profile">
        <figure>
          <img src={profile.avatar_url} alt="Avatar do usuário" />
          <h1>
            <Star
              size={32}
              color={colorPurple}
              weight={weightFavorite}
              onClick={saveAsFavorite}
            />
            {profile.name}
          </h1>
        </figure>
        <div className="infos-container">
          <div className="infos">
            <span title="Company">
              <Buildings size={28} color={colorPurple} weight="duotone" />
              {profile.company ? profile.company : 'Não informado'}
            </span>
            <span title="Location">
              <MapPin size={28} color={colorPurple} weight="duotone" />
              {profile.location ? profile.location : 'Não informado'}
            </span>
            {profile.email && (
              <span title="Email">
                <EnvelopeSimple
                  size={28}
                  color={colorPurple}
                  weight="duotone"
                />
                {profile.email}
              </span>
            )}
          </div>
          <nav>
            <a href={profile.blog} rel='noreferrer' target="_blank">
              <Link size={28} color={colorPurple} weight="duotone" />
              Blog
            </a>
            <a href={profile.html_url} rel='noreferrer' target="_blank">
              <GithubLogo size={28} color={colorPurple} weight="duotone" />
              Github
            </a>
          </nav>
        </div>
        <NavLink to={`/profile/${profile.login}/repos`} className="link-repo">
          <Archive size={28} color={colorPurple} weight="duotone" />
          {`${profile.public_repos} Repositórios`}
        </NavLink>
        {profile.bio && (
          <div className="bio">
            <h2>Bio</h2>
            <p>{profile.bio}</p>
          </div>
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
