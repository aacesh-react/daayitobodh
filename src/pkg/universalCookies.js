import Cookies from "universal-cookie";

const cookies = new Cookies();
export function getCookie(key) {
  return cookies.get(key);
}

export function setCookie(key, value, options) {
  cookies.set(key, value, options);
}

export function removeCookie(key, tokenOptions) {
  cookies.remove(key, tokenOptions);
}
