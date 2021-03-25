import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import PostModal from '../PostModal'
import { logout } from "../../services/auth";
import LogoutButton from '../auth/LogoutButton'
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  let history = useHistory()
  const homeRouter = () => {
    history.push('/')
  }

  const user = useSelector(state => state.session.user)
  let userId = 1
  if(user) {userId = user.id}
  const profileRedirect = () => {
    history.push(`/profile/${userId}`)
  }

  const logoutNow = () => {
    logout()
    setAuthenticated(false)
  }


  return (
    <nav className="navbar">
      <div className="navbar__logocontainer">
        <h1 className="navbar__logo" style={{ cursor: 'pointer' }} onClick={homeRouter}> ... </h1>
      </div>
      <div className="navbar__search">
        <i className="fas fa-search navbar__icon" />
        <input type="text" placeholder="Search" className="navbar__searchfield"></input>
      </div>
      <div className="navbar__navicons">
        <PostModal edit={false}/>
        {/* <i className="fas fa-home navbar__icon" onClick={homeRouter} />
        <i className="far fa-paper-plane navbar__icon" />
        <i className="far fa-heart navbar__icon" />
        <i className="far fa-user dropdown__icon" onClick={profileRedirect}/>
        <i className="far fa-bookmark dropdown__icon" />
        <i className="fas fa-cog dropdown__icon" />
        <i className="fas fa-sign-out-alt dropdown__icon" onClick={logoutNow} /> */}
        <LogoutButton setAuthenticated={setAuthenticated} />

      </div>
    </nav>
  );
}

export default NavBar;