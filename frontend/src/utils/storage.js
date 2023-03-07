export function getUserToken() {
  // Add code to get the token from local storage
  return localStorage.getItem("token");
}
export function setUserToken(token) {
  // Add code to set a new token in local storage
  return localStorage.setItem("token", token);
}
export function clearToken() {
  localStorage.removeItem("token");
}