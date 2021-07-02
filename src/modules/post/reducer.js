import {Cmd, loop} from "redux-loop";

import {GET_POST, GET_POST_ERROR, GET_POST_SUCCESS, getPostError, getPostSuccess} from "./actions";
import API from "../../API";

const defaultState = () => ({
  loading: false,
  error: false,
  errorMessage: null,
  data: null,
  postUrl: ""
})

const userReducer = (state = defaultState(), action) => {
  switch (action.type) {

    case GET_POST:
      state = {...state, postUrl: action.payload, loading: true, error: false, errorMessage: null}
      return loop(state,
        Cmd.run(API.post.getPost, {
          args: [action.payload],
          successActionCreator: getPostSuccess,
          failActionCreator: getPostError
        })
      )

    case GET_POST_SUCCESS: {
      const {data} = action.payload
      return {...state, loading: false, data}
    }

    case GET_POST_ERROR: {
      return {...state, error: true, loading: false, errorMessage: "Unable to fetch post. Try Again"}
    }

    default:
      return state
  }
}

export {defaultState}
export default userReducer
