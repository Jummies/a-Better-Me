import React, { useState, useEffect } from "react";
import './SmallPost.css'
import { Modal } from '../../context/modal'
import ModalPost from './modalClickPost'



import { useDispatch } from "react-redux";
import Comments from "../Comments";
import CommentForm from "../Comments/CommentForm";
import commentIcon from "../../images/icons/insta_comment_icon.png";
import blankHeart from "../../images/icons/insta_heart_blank_icon.png";
import BMHeart from "../../images/BMHeart.png";
import redHeart from "../../images/icons/insta_heart_red_icon.png";
import { postLike } from "../../store/postLike";

export default function SmallPost({ post, user }) {
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

  const [showModal, setShowModal] = useState(false);

  const checkCritique = () => {
    if(post.criticId == 0) {
      return <span>Anonymous</span>
    } else {
      return <span>User {post.criticId}</span>
    }
  }

  useEffect(() => {
    if (post) {
      if (post.likesUsers.includes(user.id)) {
        setIsLiked(true);
      } else setIsLiked(false);
    }
  }, [setIsLiked, post, user]);

  return (
    <div className="cardContainer">

      <div className="card">

        <div className='card__desc'>
          {/* <h2>{post.description}</h2> */}
          <h2>Why did you choose not to kill fire lord Ozai? How did it benefit the world?</h2>
        </div>

        <div className='card__footer'>
          <span className='card__critiqueBy'>Critique by {checkCritique()}</span>
          <span className='card__createdAt'> on {post.date_created}</span>
        </div>

        <div className='card__comments'>
          <Comments postId={post.id} />

        </div>

        <div className='card__icon'>
          <img
            src={isLiked ? redHeart : blankHeart}
            alt='post like button'
            onClick={() => likeHandler()}
          />
          {/* {isLiked ? heartFill() : heartEmpty()} */}
          <span className='card__likes'>
            {likeCount()}
          </span>

        </div>

        <div className='card__commentform'>
          <CommentForm postId={post.id}/>

        </div>



      </div>
      

      {/* <span>critique by: {post.criticId}</span> */}

      {/* <article className="card">
        <figure>
          <img src={post.imagePath} key={post.id} alt="ig post" onClick={() => { setShowModal(true) }
          } />
          {showModal
            && (<Modal onClose={() => {
              // setDisplayCSS('inline-block')
              setShowModal(false)
            }}>
              <ModalPost post={post} user={user} />
            </Modal>
            )}

        </figure>
      </article> */}

    </div>
  )
}