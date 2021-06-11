import {Cmd, loop} from "redux-loop";
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  getPostsError,
  getPostsSuccess,
  POSTS_COUNT,
  POSTS_COUNT_ERROR,
  POSTS_COUNT_SUCCESS,
  postsCountError,
  postsCountSuccess,
  SET_FILTERS,
  SET_SEARCH,
  SET_TYPE
} from "./actions";
import API from "../../API";
import {SORT} from "../../constants/sort";

const defaultState = () => ({
  loading: false,
  error: false,
  errorMessage: null,
  data: [],
  filters: {formType: [], location: [], qualification: [], company: []},
  type: "all-job",
  currentPage: 1,
  totalPage: 1,
  totalPosts: 0,
  sortBy: SORT.sortBy.CREATED_AT,
  sortOrder: SORT.sortOrder.DESC,
})

const userReducer = (state = defaultState(), action) => {
  switch (action.type) {
    case POSTS_COUNT:
      state = {...state, ...action.payload, error: false, errorMessage: null}
      return loop(
        state,
        Cmd.run(API.posts.postsCount, {
          args: [state.filters, state.sortBy, state.sortOrder, state.type, state.search],
          successActionCreator: postsCountSuccess,
          failActionCreator: postsCountError
        })
      )

    case POSTS_COUNT_SUCCESS: {
      const {data} = action.payload
      return {...state, totalPage: data.page, totalPosts: data.totalPost}
    }

    case POSTS_COUNT_ERROR: {
      return {...state, error: true, errorMessage: "Unable to fetch Page Count. Try Again"}
    }

    case GET_POSTS:
      state = {...state, loading: true, error: false, errorMessage: null, data: [], ...action.payload}
      return loop(state,
        Cmd.run(API.posts.getPosts, {
          args: [state.filters, state.sortBy, state.sortOrder, state.type, state.search, state.currentPage],
          successActionCreator: getPostsSuccess,
          failActionCreator: getPostsError
        })
      )

    case GET_POSTS_SUCCESS: {
      const {data: posts} = action.payload
      return {...state, loading: false, data: posts}
    }

    case GET_POSTS_ERROR: {
      return {...state, error: true, loading: false, errorMessage: "Unable to fetch posts. Try Again"}
    }

    case SET_SEARCH: {
      return {...state, search: action.payload}
    }

    case SET_FILTERS: {
      return {...state, filters: action.payload}
    }

    case SET_TYPE: {
      return {...state, type: action.payload}
    }

    default:
      return state
  }
}


export {defaultState}
export default userReducer
