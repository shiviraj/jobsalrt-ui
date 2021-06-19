import {SET_DESCRIPTION, SET_TITLE} from "./actions";

const defaultState = () => ({
  title: "JobsAlrt",
  description: "JobsAlrt is one of the best government jobs website in India. At JobsAlrt we try to bring only those things that are 100% genuine (checked by our team) and useful for our users. If you are new on jobsAlrt and want to check current govt jobs updates or other alert like written exam results, admit cards, syllabus, admissions, answer key on your mobile then you can bookmark jobalrt and create your account or keep visiting our site for fresh content. JobsAlrt is trying to bring innovative features for our users, like use of filters to find jobs easily, alerts on your mobile for a particular job and many more. Hope you will find JobsAlrt's efforts useful and will keep supporting us.🙂"
})

const userReducer = (state = defaultState(), action) => {
  switch (action.type) {
    case SET_TITLE: {
      return {...state, title: action.payload}
    }

    case SET_DESCRIPTION: {
      return {...state, description: action.payload}
    }

    default:
      return state
  }
}


export {defaultState}
export default userReducer
