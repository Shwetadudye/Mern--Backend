export const setCookiesFunc = (value) => {
  try {
    if (document.cookie) {
      if (document.cookie.split('=')[0] === 'authToken') {
        return;
      }
    }
    let date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expire = date.toUTCString();
    document.cookie = `authToken=${value}; expires=${expire}`;
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
};

export const getCookiesFunc = () => {
  const token = document.cookie.split('=')[1];

  return token ? token : '';
  // return document.cookie;
};