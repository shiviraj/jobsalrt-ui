import axios from "../axios";

const post = (host = '') => {
  return {
    getPost(url) {
      return axios.fetch(`${host}/api/post/${url}`)
    },
    updateViews(url) {
      return axios.fetch(`${host}/api/post/${url}/update-views`)
    }
  }
}


export default post
