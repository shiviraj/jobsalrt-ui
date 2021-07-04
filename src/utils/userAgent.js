const IOS_UA_SUBSTRING = /iphone|ipod|iPad/i
const ANDROID_UA_SUBSTRING = /android/i

const userAgentContains = userAgentSubstring => {
  if (typeof window !== 'undefined') {
    const userAgent = window.navigator.userAgent.toLowerCase()
    return userAgentSubstring.test(userAgent)
  }
  return false
};

const isIOS = () => userAgentContains(IOS_UA_SUBSTRING)
const isAndroid = () => userAgentContains(ANDROID_UA_SUBSTRING)
const isMobile = () => isIOS() || isAndroid()
const isClient = () => typeof window !== 'undefined'

export {isIOS, isAndroid, isMobile, isClient}
