import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = function (props) {
  const userName = props.User.userName;
  return (
    <header>
      <nav>
        <NavLink to='/home'>Home </NavLink>
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/value'>Value </NavLink>
        <NavLink to='/user'>User </NavLink>
        User: {userName}
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    User: state.userReducer
  }
}

export default connect(mapStateToProps, null)(Header);