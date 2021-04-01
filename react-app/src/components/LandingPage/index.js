import React, { useEffect } from "react";
import Posts from "../Posts";
import { useDispatch, useSelector } from "react-redux";
import StationarySide from "./StationarySide";
import "./LandingPage.css";
import * as commentActions from '../../store/comments'
import * as postActions from "../../store/posts";
import { getUsers } from "../../store/user";
import { useHistory, NavLink } from 'react-router-dom';

const LandingPage = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user)
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(postActions.getPosts());
    dispatch(getUsers())
    dispatch (commentActions.getComments())
  }, [dispatch]);

  let usersx = [];

	if (users) {

		for (let key in users) {
			
				usersx.push(users[key])
			
		}

	}

  const ux = (id) => {
    if(usersx[id]) return usersx[id].profilePicture
    else return 1
  }
  console.log('ux', usersx)

  return (
    <>
      <div className='landing__container'>

        <div className='landing__header'>
          {/* Welcome Home, {user.username} */}
        </div>

        <div className='x'>
          {/* <StationarySide /> */}
        </div>
        <div className='posts__feed'>
          <Posts />
        </div>

        <div className='sss'>
          
          <span>Trending Users</span>
          <div className='ppp'>

            <NavLink className='pp' exact to='/profile/8' >
              <img src={ux(7)} alt='profile pic' />
            </NavLink>
            <NavLink className='pp' exact to='/profile/7' >
              <img src={ux(6)} alt='profile pic' />
            </NavLink>
            <NavLink className='pp' exact to='/profile/2' >
              <img src={ux(1)} alt='profile pic' />
            </NavLink>
            <NavLink className='pp' exact to='/profile/3' >
              <img src={ux(2)} alt='profile pic' />
            </NavLink>
            <NavLink className='pp' exact to='/profile/4' >
              <img src={ux(3)} alt='profile pic' />
            </NavLink>

          </div>

        </div>

      </div>
    </>
  );
};

export default LandingPage;
