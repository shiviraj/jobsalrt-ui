import posts from "./modules/posts";
import post from "./modules/post";
import contact from "./modules/contact";
import {BFF_URL} from "../config/env";

const init = () => {
  const API = {}
  API.posts = posts(BFF_URL)
  API.post = post(BFF_URL)
  API.contact = contact(BFF_URL)
  return API
}

const API = init()
export default API
