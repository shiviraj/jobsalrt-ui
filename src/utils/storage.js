const UNDEFINED = 'undefined'

const storageLocation = () => 'localStorage';

const setStorage = (key, value) => {
  if (typeof window === UNDEFINED) return
  window[storageLocation()].setItem(key, JSON.stringify(value))
};

const getStorage = key => {
  try {
    if (typeof window === UNDEFINED) return

    const result = window[storageLocation()].getItem(key)
    if (!!result && result !== UNDEFINED) {
      return JSON.parse(result)
    }
  } catch (e) {
  }
};

const clearStorage = () => {
  if (typeof window === UNDEFINED) return
  window[storageLocation()].clear()
};

const removeFromStorage = key => {
  if (typeof window === UNDEFINED) return
  window[storageLocation()].removeItem(key)
};

export {setStorage, getStorage, clearStorage, removeFromStorage}
