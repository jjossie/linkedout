import {loggedInFetch} from "../utils/fetch";

const loginUser = async (email, password) => {
  // Construct headers needed for a JSON request
  const headers = {
    "Content-Type": "application/json",
  };
  // Create the body of the request from the email and password
  const body = JSON.stringify({email, password});
  const method = "POST";
  const options = {
    method,
    headers,
    body,
  }
  // Use fetch to make a POST request to your backend
  // Create the URL for the login request
  const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/user/login`;
  const response = await fetch(url, options);
  const data = await response.json();
  if (data.errorCode) {
    return null;
  } else if (data.token) {
    return data.token;

  } else return null;
};

const registerUser = async (firstName, lastName, email, password) => {
  const headers = {
    "Content-Type": "application/json",
  };
  // Create the body of the request from the email and password and name
  const body = JSON.stringify({firstName, lastName, email, password});
  const method = "POST";
  const options = {
    method,
    headers,
    body,
  }
  // Use fetch to make a POST request to your backend
  // Create the URL for the login request
  const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/user/register`;
  const response = await fetch(url, options);
  return await response.json();
}


const getSuggestedConnections = async () => {
  const response = await loggedInFetch("/user/suggestedConnections");
  console.log(response);
  return await response.json();
}

export {loginUser, registerUser, getSuggestedConnections};
