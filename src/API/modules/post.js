import axios from "../axios";

const post = (host = '') => {
  return {
    getPost(url) {
      return axios.fetch(`${host}/api/post/${url}`)
    },
  }
}


export default post
