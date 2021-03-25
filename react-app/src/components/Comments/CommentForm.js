import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import "./CommentForm.css";
import smilyIcon from '../../images/icons/insta_smily_face_icon.png'
import {createComment} from '../../store/comments'
import commentIcon from "../../images/icons/insta_comment_icon.png";

const CommentForm = (props) => {
  const [content, setContent] = useState('')
  const user = useSelector(state => state.session.user)
  const postId = props.postId
  const dispatch = useDispatch()


  const formSubmitHandler = async (e) => {
    e.preventDefault()
    if(!content) return alert('there is no content')
    const userId = user.id
    dispatch(createComment(userId,postId,content))
  }


  return (
    <div className='comment-form__container'>
      {/* <img
        alt="smile emoji"
        className='comment-form__icon'
        src={smilyIcon}
      ></img> */}

      <form className="commentform" onSubmit={formSubmitHandler}>


        
        <input
          className='comment-form__input'
          placeholder=' Say something...'
          onChange={(e) => setContent(e.target.value)}
        >
          
        </input>

        <button type='submit' className='comment-form__button'>
          <i class="fas fa-chevron-circle-right" />
        </button>

      </form>

    </div>
  );
};

export default CommentForm;
