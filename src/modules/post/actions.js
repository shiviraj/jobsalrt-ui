export const NAMESPACE = 'GET_POSTS/'

export const GET_POST = NAMESPACE + 'GET_POST'
export const GET_POST_SUCCESS = NAMESPACE + 'GET_POST_SUCCESS'
export const GET_POST_ERROR = NAMESPACE + 'GET_POST_ERROR'

const getPost = (payload) => ({
  type: GET_POST,
  payload
})

const getPostSuccess = (data) => ({
  type: GET_POST_SUCCESS,
  payload: {data}
})

const getPostError = ({error}) => ({
  type: GET_POST_ERROR,
  payload: {error}
})

export {getPost, getPostSuccess, getPostError}
