const truncate = (length) => {
  return (text) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
}

const generateRandomString = length => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export {truncate, generateRandomString}
