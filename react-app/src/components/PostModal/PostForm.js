import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import { getSignedRequest } from '../../services/upload'
import { createCritique, createPost, editPost, deletePost } from '../../store/posts'
import './PostForm.css'


function PostForm({ edit, post, setShowModal }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [src, setSrc] = useState('')
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const user = useSelector(state => state.session.user)

  const profile = useSelector(state => state.profiles.profile)
  
  let userId
  if (user) {
    userId = user.id;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      await dispatch(editPost(post.id, description, isPrivate));
    } else {
      // const url = await getSignedRequest(photo);
      const url = 'test url'
      await dispatch(createCritique({userId, description, url, isPrivate }, profile.id));
    }
    setShowModal(false)
    history.push(`/profile/${profile.id}`);
  };
  const readUrl = (e) => {
    if (e.target.files[0]){
      const src = URL.createObjectURL(e.target.files[0])
      setSrc(src)
      setPhoto(e.target.files[0])
    }
  }
  const removePost = async (e) => {
    await dispatch(deletePost(post.id));
  };
  return (
    <div className='postform__container'>
      <h2 className='postform__header'>{edit ? "Edit Post" : "Post Form"}</h2>
      <form className='postform' onSubmit={handleSubmit}>
      {src && <img className="postform__image" src={src} />}
        {!edit && (
          <div className='fileInput__container'>

          </div>
        )}

        <textarea
          rows='5'
          cols='33'
          type='textarea'
          value={description}
          placeholder='Critique'
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className='postform__label'>
          <input
            type='checkbox'
            className='postform__input checkbox'
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
          />
        </label>
        <div className='postform__button-container'>
          <button type='submit' className='postform__button'>
            {edit ? "Edit Post" : "Submit"}
          </button>

          {edit && (
            <a onClick={removePost} className='postform__delete'>
              Delete Post
            </a>
          )}
        </div>
      </form>
    </div>
  );
}

export default PostForm;