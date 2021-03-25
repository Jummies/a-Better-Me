import React, { useEffect } from "react";
import Posts from "../Posts";
import { useDispatch, useSelector } from "react-redux";
import StationarySide from "./StationarySide";
import "./LandingPage.css";
import * as commentActions from '../../store/comments'
import * as postActions from "../../store/posts";
import { getUsers } from "../../store/user";


const LandingPage = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(postActions.getPosts());
    dispatch(getUsers())
    dispatch (commentActions.getComments())
  }, [dispatch]);

  return (
    <>
      <div className='landing__container'>

        <div className='landing__header'>
          Welcome Home, {user.username}
        </div>

        <div>
          <StationarySide />
        </div>
        <div className='posts__feed'>
          <Posts />
        </div>

      </div>
    </>
  );
};

export default LandingPage;
