import posts from "./modules/posts";
import post from "./modules/post";
import contact from "./modules/contact";

const bffUrl = process.env.JOBSALRT_BFF_URL;

const init = () => {
  const API = {}
  API.posts = posts(bffUrl)
  API.post = post(bffUrl)
  API.contact = contact(bffUrl)
  return API
}

const API = init()
export default API
