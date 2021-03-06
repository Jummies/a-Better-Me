import React, { useEffect, useState, useContext } from 'react'

import { useDispatch } from 'react-redux'

import { getProfile } from '../../store/profile'

import { getFollows } from '../../store/follow'

import { useParams } from 'react-router-dom'
import './styles/headers.css'
function Header({ profile }) {


    const [isLoaded, setIsLoaded] = useState(false);


    // const item = Object.values(profile)[0]
    // const profileObj = Object.values(profile)[0]


    return (
        <>

            {profile &&
                <div className="HeaderMain">

                    <div className="pfp">
                        <img src={profile.profilePicture} alt={profile.username} />
                    </div>
                    <h2 className="userHandle">{profile.username}</h2>
                    {/* <i style={{ fontSize: '3.2rem' }} class="fas fa-cog"></i> */}
                    <div className="metrics">
                        <span>posts</span>
                        <span className="s"></span>
                        <span>followers</span>
                        <span className="s"></span>
                        <span>following</span>
                    </div>
                    <div><h4>{profile.username}</h4></div>
                    <div><p>{profile.biography}</p></div>


                </div>}

        </>
    )
}
export default Header
