import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Comments from "../Comments";
import CommentForm from "../Comments/CommentForm";
import commentIcon from "../../images/icons/insta_comment_icon.png";
import blankHeart from "../../images/icons/insta_heart_blank_icon.png";
import BMHeart from "../../images/BMHeart.png";
import redHeart from "../../images/icons/insta_heart_red_icon.png";
import { postLike } from "../../store/postLike";
import "./Posts.css";
// import EditPostModal from "../EditPostModal";

const Post = ({ post, user }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const likeHandler = () => {
    const like = { userId: user.id, postId: post.id };
    setIsLiked(!isLiked);
    dispatch(postLike(like));
  };

  const likeCount = () => {
    if (post.likesUsers.length === 0) {
      return "";
    } else {
      return post.likesUsers.length;
    }
  };

  const heartEmpty = () => <i className="heart2 far fa-heart" onClick={() => likeHandler()} />
  const heartFill = () => <i className="heart1 fas fa-heart" onClick={() => likeHandler()} />


  //sets isLiked to match redux state
  useEffect(() => {
    if (post) {
      if (post.likesUsers.includes(user.id)) {
        setIsLiked(true);
      } else setIsLiked(false);
    }
  }, [setIsLiked, post, user]);

  const checkCritique = () => {
    if(post.criticId == 0) {
      return <span>Anonymous</span>
    } else if(post.criticId == 1) {
      return <span className='critique_name'>Demo</span>
    } else if(post.criticId == 2) {
      return <span className='critique_name'>Jummy</span>
    } else if(post.criticId == 3) {
      return <span className='critique_name'>Aang</span>
    } else if(post.criticId == 4) {
      return <span className='critique_name'>Sokka</span>
    } else if(post.criticId == 5) {
      return <span className='critique_name'>Zuko</span>
    } else if(post.criticId == 6) {
      return <span className='critique_name'>Katara</span>
    } else if(post.criticId == 7) {
      return <span className='critique_name'>Toph</span>
    } else if(post.criticId == 8) {
      return <span className='critique_name'>Iroh</span>
    } else if(post.criticId == 9) {
      return <span className='critique_name'>Azula</span>
    } else if(post.criticId == 10) {
      return <span className='critique_name'>Cabbage Guy</span>
    }
  }

  return (
    <div key={post.id} className='post__container'>

      {/* <div className='post__header'>
        <div className='post__profile-pic'>
          <img src={post.profilePicture} alt='profile pic' />
        </div>
        <div className='post__user-info'>
          <div className='post__username'>{post.username}</div>
        </div>
      </div> */}

      <div className='post__profile-pic'>
        <img src={post.profilePicture} alt='profile pic' />
      </div>



      <div className='post__main'>

        <div className='post__main__header'>
          <h2>{post.description}</h2>
          <div className='post__icon'>
            <img
              src={isLiked ? redHeart : blankHeart}
              alt='post like button'
              onClick={() => likeHandler()}
            />
          {/* {isLiked ? heartFill() : heartEmpty()} */}
            <span className='post__likes'>
              {likeCount()}
            </span>
          </div>
        </div>

        <div className='post__main__footer'>
          <span className='post__critiqueBy'>Critique by {checkCritique()}</span>
          <span className='post__createdAt'> on {post.date_created}</span>
        </div>

        <div className='comment__container2'>
          <div className='post__comments'>
            {/* pass user in as props to Comments */}
            { console.log("post id: ", post.id)}
            <Comments postId={post.id} />
          </div>
        </div>



        <div className='post__comment-form'>
          <CommentForm postId={post.id}/>
        </div>

      </div>




      {/* <div className='post__icons'>
        <div className='post__icon'>
          <img
            src={isLiked ? redHeart : blankHeart}
            alt='post like button'
            onClick={() => likeHandler()}
          />
          <span className='post__likes'>
            {likeCount()}
          </span>
        </div>
        
        <div className='post__icon'>
          <p className='commment__likes-count'>
            {"likes: " + post.likesUsers.length + " " + likeCount()}
          </p>
        </div>
      </div> */}

      {/* <div className='comment__container'>
        <div className='post__comments'>
          <Comments postId={post.id} />
        </div>
      </div>

      <div className='post__comment-form'>
        <CommentForm postId={post.id}/>
      </div> */}

    </div>
  );
};

export default Post;