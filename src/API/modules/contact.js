import {METHODS} from "../constants";
import axios from "../axios";

const contact = (host = '') => {
  return {
    save(payload) {
      return axios.fetch(`${host}/api/contact`, {data: payload, method: METHODS.POST})
    }
  }
}


export default contact
