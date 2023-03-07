import {loggedInFetch} from "../utils/fetch";
import {redirect} from "react-router-dom";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export async function loadFeed({params}) {
  return loggedInFetch(`${baseUrl}/user/feed`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
}


export async function loadProfile() {
  // Get the logged-in User
  const user = await loggedInFetch("/user", "GET")

  // Get the connections
  const connectionsArr = await loggedInFetch(`${baseUrl}/user/connections`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
  let connectionUserIds = [];
  connectionsArr?.forEach(connection => {
    connectionUserIds.push(connection.userIds.filter(id => id !== user._id)[0].toString());
  });
  // console.log(connectionUserIds);

  return {
    user: user,
    connectionUserIds: connectionUserIds,
  };
}


export async function loadPostsForUser(request) {
  const posts = await loggedInFetch(`${baseUrl}/user/${request.params.userId}/posts`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
  // console.log(posts)
  const user = await loggedInFetch(`${baseUrl}/user/${request.params.userId}`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
  // console.log(user)
  return {
    user: user,
    posts: posts
  }
}


export async function loadConnectionRequests(request) {
  // Get the connection requests for the logged-in user
  // TODO fix this!!!
  const connectionRequests = await loggedInFetch(`${baseUrl}/user/connectionRequests`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
  // console.log(connectionRequests);
  return connectionRequests;
}

