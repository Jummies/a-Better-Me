import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from "../../services/auth";
import './NavSide.css';

const NavSide = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push('/');
  };

  return (
    <div className='sidenav'>
      <h4 className='aaa1'>        a Better Me</h4>

      <div className='aaaa'> 
      <NavLink
        className='sidenav__logo'
        exact to='/'
      >
        {/* <img src='https://cdn.discordapp.com/attachments/537497024958824480/824580738867396629/BMHeart.png' /> */}

      </NavLink>

      <NavLink
        activeClassName='sidenav__links--active'
        className='sidenav__links'
        className='aaa2'
        to='/'
      >
        <i className='sidenav__icons fas fa-home' />
        
      </NavLink>

      {/* <NavLink
        activeClassName='sidenav__links--active'
        className='sidenav__links'
        exact to='/my-wishes'
      >
        <i className='sidenav__icons fas fa-gift' />
        My Wishes
      </NavLink> */}

      <NavLink
        activeClassName='sidenav__links--active'
        className='sidenav__links'
        className='aaa3'
        exact to='/notifications'
      >
        <i className='sidenav__icons fas fa-bell' />
        
      </NavLink>

      <NavLink
        activeClassName='sidenav__links--active'
        className='sidenav__links'
        className='aaa4'
        exact to='/settings'
      >
        <i className='sidenav__icons fas fa-cog' />
        
      </NavLink>

      </div>
      


      <button
        className='sidenav__logout'
        onClick={handleLogout}
      >
        <i className='sidenav__logout-icon fas fa-sign-out-alt fa-lg' />

      </button>
    </div>
  );
};

export default NavSide;