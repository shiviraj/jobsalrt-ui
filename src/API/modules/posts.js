import {METHODS} from "../constants";
import axios from "../axios";

const posts = (host = '') => {
  return {
    postsCount(filters, sortBy, sortOrder, type, search) {
      const options = {data: {filters, sortBy, sortOrder, search}, method: METHODS.POST}
      return axios.fetch(`${host}/api/posts/type/${type}/posts-count`, options)
    },
    getPosts(filters, sortBy, sortOrder, type, search, currentPage) {
      const options = {data: {filters, sortBy, sortOrder, search}, method: METHODS.POST}
      return axios.fetch(`${host}/api/posts/type/${type}/page/${currentPage}`, options)
    },
    getOptions(key, text) {
      return axios.fetch(`${host}/api/posts/options?${key}=${text}`)
    },
  }
}


export default posts
