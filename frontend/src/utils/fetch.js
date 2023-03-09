import {getUserToken} from "./storage";
const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export function loggedInFetch(url, method = "GET") {
  const token = getUserToken();
  if (!token){
    // throw new Error("Must be logged in");
    console.error("Not Logged in");
    return Promise.reject("Must be logged in");
  }

  const headers = {
    "Authorization": `Bearer ${token}`
  };
  const options = {
    headers: headers,
    method: method
  }
  const fetchUrl = `${baseUrl}${url}`;
  console.log("Sending loggedInFetch: ");
  console.log({
    url,
    token,
    options,
  })
  return fetch(fetchUrl, options);
}