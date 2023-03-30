import {loggedInFetch} from "../utils/fetch";
import {redirect} from "react-router-dom";

export async function loadFeed({params}) {

  const user = await getLoggedInUser();

  const feed = await loggedInFetch(`/user/feed`)
    .then(res => res.json())
    .catch(reason => {
      console.error(reason);
      return redirect("/login");
    });
  return {
    user: user,
    ...feed
  }
}


export async function loadProfile() {
  // Get the logged-in User
  const user = await getLoggedInUser();
  // Get the connections
  const connectionsArr = await loggedInFetch(`/user/connections`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));

  // TODO fix
  // Get the user's posts
  // const posts = await loggedInFetch("/user/")

  return {
    user: user,
    connectionUserIds: connectionsArr.map(conn => conn._id),
    posts: null
  };
}


export async function loadPostsForUser(request) {
  console.log("Loading page for user:");
  console.log(request.params.userId);
  if (!request.params.userId)
    return redirect("/login"); // This aint working
  const posts = await loggedInFetch(`/user/${request.params.userId}/posts`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
  const user = await loggedInFetch(`/user/${request.params.userId}`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
  return {
    user: user,
    posts: posts
  }
}


export async function loadConnectionRequests(request) {

  const user = await getLoggedInUser();

  // Get the connection requests for the logged-in user
  const connectionRequests = loggedInFetch(`/user/connectionRequests`)
    .then(res => {
      if (res.status === 403 || res.status === 400) {
        throw new Error(`Fetch returned response ${res.status}`);
      } // TODO wrap this in a loader object
      return res.json();
    })
    .catch(reason => redirect("/login"));

  return {
    connectionRequests,
    user
  }
}



async function getLoggedInUser() {
  return loggedInFetch("/user", "GET")
    .then(res => res.json())
    .catch(reason => redirect("/login"));
}