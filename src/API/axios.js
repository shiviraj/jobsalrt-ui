import axios from "axios";
import {getStorage} from "../utils/storage";
import {StorageKeys} from "../constants/storage";
import {decryptResponse, encryptRequest, iv} from "./crypto";
import {generateRandomString} from "../utils/string";

export const defaultHeaders = {'Content-Type': 'application/json'}

const init = () => {
  const auth = getStorage(StorageKeys.AUTH)
  const authToken = auth ? auth.token : generateRandomString(40)
  const encryptionDisabled = process.env.DISABLE_ENCRYPTION || false;
  const headers = encryptionDisabled ? {'disable-encryption': encryptionDisabled} : {}
  return {...defaultHeaders, ...headers, iv: iv.toString("hex"), authorization: authToken}
}

const utils = {
  fetch(url, {data, ...options} = {}) {
    return new Promise((resolve, reject) => {
        const headers = init()
        const payload = encryptRequest(data, headers)
        axios({url, ...options, headers: {...headers, ...options.headers}, data: payload})
          .then((res) => {
            resolve(decryptResponse(res.data, headers))
          })
          .catch((error) => {
            reject(error)
          })
      }
    )
  }
}

export default utils
