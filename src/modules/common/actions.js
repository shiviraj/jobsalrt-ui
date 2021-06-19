export const NAMESPACE = 'COMMON/'

export const SET_TITLE = NAMESPACE + 'SET_TITLE'
export const SET_DESCRIPTION = NAMESPACE + 'SET_DESCRIPTION'

const setTitle = (value) => ({
  type: SET_TITLE,
  payload: value
})

const setDescription = (type) => ({
  type: SET_DESCRIPTION,
  payload: type
})

export {setTitle, setDescription}
