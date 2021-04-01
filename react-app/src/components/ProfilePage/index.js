import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header.js'

import SmallPost from './SmallPost'
import PostModal from '../PostModal'
// import FeaturedStories from './FeaturedStories.js'
// import Posts from './Posts.js'
import { getProfile } from '../../store/profile'
// import { getFollows } from '../../Store/follow'
import { getPosts } from '../../store/posts'
import { getUsers } from '../../store/user'
import { useParams } from 'react-router-dom'
import FollowUser from '../FollowUser'
// import './styles/Profile.css'
import { getFollowers } from '../../store/follow.js'

import * as commentActions from '../../store/comments'
import * as postActions from "../../store/posts";
import './ProfilePage.css'

function Profile() {
  const dispatch = useDispatch()
	const { id } = useParams()
	const [loaded, setLoaded] = useState(false)
	const userId = useSelector(state => state.session.user.id)
	const user = useSelector((state) => state.session.user);
	const profile = useSelector(state => state.profiles.profile)
	const posts = useSelector(state => state.posts)

	let userPosts = []

	useEffect(() => {
    dispatch(postActions.getPosts())
    dispatch(getUsers())
    dispatch (commentActions.getComments())
		dispatch(getProfile(id))
		dispatch(getPosts())
		dispatch(getFollowers(id))
		setLoaded(true)
	}, [dispatch])

	if (posts) {

		for (let key in posts) {
			if (posts[key].userId == id) {
				userPosts.push(posts[key])
			}
		}
    userPosts = userPosts.reverse();
	}
	// 	const [displayCSS, setDisplayCSS] = useState("inline-block")
	// 	style = {{ display: { displayCSS } }
	// }
	// setDisplayCSS('none')
  console.log('proof: ', profile)

	return (
		<>
			{ loaded &&
				<div className='profile__container'>
					{/* < Header profile={profiles[id]} /> */}


          <div className='profile__right'>
            <div className='profile__pic'>
              <img src={(profile && profile.profilePicture)} alt='profile pic' />
            </div>

            <div className='profile__name'>{(profile && profile.username)}</div>

            <div className="moveTheFollowButton">
              <FollowUser followedUserId={id} />
            </div>

            <div className='profile__bio'>{(profile && profile.biography)}</div>
            {/* <span>{(profile && profile.followerCount)}</span>
            <span>{(profile && profile.followingCount)}</span> */}



            
          </div>

          <div className='profile__left'>

            <div className='profile__postbutton'>
              <PostModal edit={false} />
            </div>

            <div className="feed">
              {userPosts &&
                userPosts.map((post) => <SmallPost post={post} user={user} />)
              }
            </div>

          </div>



            



				</div>
			}
		</>

	)
}

export default Profile;