import {Bookmark, Compass} from 'phosphor-react';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

export function Navigation() {
  const colorPurple = '#A67BF2';
  return (
    <nav className="navigation">
      <NavLink to="/explore" data-testid="link-explore">
        <Compass size={40} color={colorPurple} weight="duotone" />
        <span>Explorar</span>
      </NavLink>
      <NavLink to="/favorites" data-testid="link-favorites">
        <Bookmark size={40} color={colorPurple} weight="duotone" />
        <span>Favoritos</span>
      </NavLink>
    </nav>
  );
}

