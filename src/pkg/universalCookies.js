import Cookies from "universal-cookie";

const cookies = new Cookies();
export function getCookie(key) {
  return cookies.get(key);
}

export function setCookie(key, value, options) {
  let tokenOptions = {
    path: "/",
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  };
  cookies.set(key, value, {
    path: "/",
    sameSite: "none",
    httpOnly: false,
    secure: false,
  });
}

export function removeCookie(key, tokenOptions) {
  cookies.remove(key, {
    path: "/",
    sameSite: "none",
    httpOnly: false,
    secure: false,
  });
}
