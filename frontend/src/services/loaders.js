import {loggedInFetch} from "../utils/fetch";
import {redirect} from "react-router-dom";

export async function loadFeed({params}) {
  return loggedInFetch(`/user/feed`)
    .then(res => res.json())
    .catch(reason => {
      console.error(reason);
      return redirect("/login");
    });
}


export async function loadProfile() {
  // Get the logged-in User
  const userRes = await loggedInFetch("/user", "GET")
  const user = await userRes.json();
  console.log(user);
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
  // Get the connection requests for the logged-in user
  return loggedInFetch(`/user/connectionRequests`)
    .then(res => {
      if (res.status === 403 || res.status === 400) {
        throw new Error(`Fetch returned response ${res.status}`);
      }
      return res.json();
    })
    .catch(reason => redirect("/login"));
}

