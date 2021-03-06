import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Comments from "../Comments";
import CommentForm from "../Comments/CommentForm";

import Post from "./Post";
// import "./Posts.css";

const Posts = () => {
  const user = useSelector((state) => state.session.user);
  const posts = useSelector((state) => {
    console.log("state x: ", state)
    return Object.values(state.posts).filter((post) => post.userId !== user.id)
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  // console.log('posts: ', posts)
  useEffect(() => {
    if (posts && user) setIsLoaded(true);
  }, [posts, user]);

  return (
    <>
      {isLoaded &&
        posts.map((post) => (
            <Post key={post.id} post={post} user={user} />
        ))}
    </>
  );
};

export default Posts;
