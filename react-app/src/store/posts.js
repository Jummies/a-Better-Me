const SET_POSTS = "posts/SET_POSTS";
const CREATE_POSTS = "posts/CREATE_POSTS";
const REMOVE_POST = "posts/REMOVE_POST";
const UPDATE_POST = "posts/UPDATE_POST";

const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

const updatePosts = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};
const removePost = (id) => {
  return {
    type: REMOVE_POST,
    id
  }
}

export const createPost = (post) => async dispatch => {
    const { isPrivate, description, url, userId} = post
    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ isPrivate, description, url, userId })
    }
    const res = await fetch('/api/posts/', options)
    const json = await res.json()
    dispatch(setPosts([json]))
}
export const editPost = (id, description, isPrivate) => async dispatch => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({description, isPrivate})
  }
  const res = await fetch(`/api/posts/${id}`, options)
  if (res.ok) {
    const newPost = await res.json()
    dispatch(setPosts([newPost]))
  }
}

export const deletePost = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/posts/${id}`, options)
  if ( res.ok) {
    dispatch(removePost(id))
  }
}

export const updatePostLikes = (like) => async (dispatch) => {
  const { postId } = like;
  const response = await fetch(`/api/posts/${postId}`);
  if (response.ok) {
    const res = await response.json();
    dispatch(updatePosts(res));
  }
  return response;
};

export const getPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts/");
  if (response.ok) {
    let res = await response.json();
       dispatch(setPosts(res.posts));
  }
  return response;
};


export const createCritique = (post, id) => async dispatch => {
  const { isPrivate, description, url, userId} = post
  const options =
  {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify({ isPrivate, description, url, userId })
  }
  const res = await fetch(`/api/posts/user/${id}`, options)
  const json = await res.json()
  dispatch(setPosts([json]))
}


export const uploadFile = (fileForm) => async (dispatch) => {
  const {
      user_id, 
      /* all,
         other,
         form,
         fields, */
         file // this is the file for uploading
  } = fileForm;

  const form = new FormData();
  form.append('user_id', user_id);
  // repeat as necessary  for each required form field
  form.append('file', file);

  const res = await fetch('/api/posts/upload', {
      method: "POST", 
      body: form
  });
};




const initialState = {};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      const posts = action.posts.reduce((acc, ele) => {
        acc[ele.id] = ele;
        return acc;
      }, {});
      return { ...state, ...posts };
    case CREATE_POSTS:
      // return { ...state, [action.drink.id]: action.drink };
      return { ...state, [action.posts.id]: action.posts };
    case REMOVE_POST:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_POST:
      const newPosts = { ...state };
      const index = action.post.id;
      newPosts[index] = action.post;
      return newPosts;
    default:
      return state;
  }
};

export default postsReducer;