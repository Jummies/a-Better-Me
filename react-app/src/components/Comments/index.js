import React, {useState,useEffect} from "react";
import "./Comments.css";
import {useSelector} from "react-redux";



const Comments = (props) => {

  const comments = useSelector((state) => {
    console.log("state y: ", state)
    return Object.values(state.comments).filter((comment) => comment.postId === props.postId);
  });
  const user = useSelector((state) => state.session.user);

  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
    if (comments && user) setIsLoaded(true);
  }, [comments, user]);

  console.log("comments: ", comments)

  return (
    <>
      { isLoaded &&
        comments.map((comment) => (
          <div className='comments__container'>
            { console.log("--comment: ", comment)}
            <div className='comments__user-comment'>
              <div className='comment__username'>{comment.username}</div>
              <div className='comment__content'>{comment.content}</div>
            </div>
          </div>


        )
      )}

    </>
  );





};

export default Comments;