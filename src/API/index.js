import posts from "./modules/posts";
import post from "./modules/editPost";

const bffUrl = process.env.JOBSALRT_BFF_URL;

const init = () => {
  const API = {}
  API.posts = posts(bffUrl)
  API.post = post(bffUrl)
  return API
}

const API = init()
export default API
