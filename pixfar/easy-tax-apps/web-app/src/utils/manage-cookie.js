import Cookies from "js-cookie";

export const saveCookie = (name, value, days) => {
  console.log("saveCookie", name, value, days);
  Cookies.set(name, value, {
    expires: days,
    path: "/",
    secure: true,
    sameSite: "lax",
  });
};

export const retrieveCookie = (name) => {
  return Cookies.get(name);
};

export const removeCookie = (name) => {
  Cookies.remove(name);
};
