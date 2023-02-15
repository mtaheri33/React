import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = function () {
  return (
    <header>
      <nav>
        <NavLink to='/home'>Home </NavLink>
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/value'>Value</NavLink>
      </nav>
    </header>
  )
}

export default Header;