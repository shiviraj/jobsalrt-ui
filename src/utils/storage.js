import {decryptResponseObject, encryptRequestPayload} from "../API/crypto";

const UNDEFINED = 'undefined'

const storageLocation = () => 'localStorage';
const iv = Buffer.from("265209876c5284cc87280f2f90f3cc33", "hex")
const cryptoKey = "ldkfjmcnvbhfklsoeiqewrwqiofiosdf"

const setStorage = (key, value) => {
  if (typeof window === UNDEFINED) return
  window[storageLocation()].setItem(key, encryptRequestPayload(cryptoKey, value, iv))
};

const getStorage = key => {
  try {
    if (typeof window === UNDEFINED) return

    const result = window[storageLocation()].getItem(key)
    if (!!result && result !== UNDEFINED) {
      return decryptResponseObject(cryptoKey, result, iv)
    }
  } catch (e) {
  }
};

export {setStorage, getStorage}
