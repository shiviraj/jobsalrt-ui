import {compose, createStore} from 'redux'
import {install} from 'redux-loop'
import {createReducerManager} from './reducer'
import postsReducer from "../modules/posts/reducer";
import postReducer from "../modules/post/reducer";
import commonReducer from "../modules/common/reducer";
import {createWrapper} from "next-redux-wrapper";

const staticReducers = {
  posts: postsReducer,
  post: postReducer,
  common: commonReducer
}

const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const isProduction = process.env.NODE_ENV === 'production'

const composeFn = (!isProduction && reduxDevTools) || compose

const enhancers = composeFn(install())

const configureStore = () => {
  const reducerManager = createReducerManager(staticReducers)
  const store = createStore(reducerManager.reduce, {}, enhancers)
  store.reducerManager = reducerManager
  return store
};

const store = configureStore();
export const wrapper = createWrapper(configureStore)
export default store
