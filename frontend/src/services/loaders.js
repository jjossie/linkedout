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
  const user = await loggedInFetch("/user", "GET")

  // Get the connections
  const connectionsArr = await loggedInFetch(`/user/connections`)
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
  const posts = await loggedInFetch(`/user/${request.params.userId}/posts`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
  // console.log(posts)
  const user = await loggedInFetch(`/user/${request.params.userId}`)
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
  const connectionRequests = await loggedInFetch(`/user/connectionRequests`)
    .then(res => res.json())
    .catch(reason => redirect("/login"));
  // console.log(connectionRequests);
  return connectionRequests;
}

