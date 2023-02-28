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
  try {
    // Create the URL for the login request
    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/user/login`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data.token;
  } catch (e) {}

  return null;
};

export { loginUser };
