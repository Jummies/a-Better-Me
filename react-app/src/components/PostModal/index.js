import React, { useState } from 'react'
import { Modal } from '../../context/modal'
import PostForm from './PostForm'
import { useDispatch, useSelector } from 'react-redux'

function PostModal({ edit }) {
  const [showModal, setShowModal] = useState(false);
  const profile = useSelector(state => state.profiles.profile)

  return (
    <>
      <div className='postmodal__container' onClick={() => setShowModal(true)} >
        Got a critique or suggestion for {(profile && profile.username)}?
      </div>
      {/* <i className="far fa-plus-square navbar__icon" onClick={() => setShowModal(true)} /> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PostForm setShowModal={setShowModal} edit={edit}/>
        </Modal>
      )}
    </>
  )
}

export default PostModal;