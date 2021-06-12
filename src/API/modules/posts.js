import {METHODS} from "../constants";
import axios from "../axios";

const posts = (host = '') => {
  return {
    postsCount(type, filters, search) {
      const options = {data: {filters, search}, method: METHODS.POST}
      return axios.fetch(`${host}/api/posts/type/${type}/posts-count`, options)
    },
    getPosts(type, filters = {}, search = "", currentPage = 1) {
      const options = {data: {filters, search}, method: METHODS.POST}
      return axios.fetch(`${host}/api/posts/type/${type}/page/${currentPage}`, options)
    },
    getOptions(key, text) {
      return axios.fetch(`${host}/api/posts/options?${key}=${text}`)
    },
  }
}


export default posts
