import {combineReducers} from 'redux-loop'
import {HYDRATE} from "next-redux-wrapper";

const createReducerManager = initialReducers => {
  const reducers = {...initialReducers}
  const combinedReducer = combineReducers(reducers);
  let keysToRemove = []
  return {
    reduce: (state, action) => {
      if (action.type === HYDRATE) {
        return {...state, ...action.payload}
      }
      if (keysToRemove.length > 0) {
        state = {...state}
        for (let key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },
  }
};

export {createReducerManager}
