import {getUserToken} from "./storage";

export function loggedInFetch(url, method = "GET") {
  const token = getUserToken();
  if (!token)
    // throw new Error("Must be logged in");
    return Promise.reject("Must be logged in");
  const headers = {
    "Authorization": `Bearer ${token}`
  };
  const options = {
    headers: headers,
    method: method
  }
  return fetch(url, options)
}