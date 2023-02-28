import {getUserToken} from "../utils/storage";

const loggedInUserId = "63dbfc0d187fe1e57908cf8b" //
const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export async function getFeed({params}) {
  const headers = {
    "Authorization": `Bearer ${getUserToken()}`
  }
  const feedUrl = `${baseUrl}/user/${loggedInUserId}/feed`;
  return await fetch(feedUrl, {headers}).then(res => res.json());
}


export async function getConnections() {
  const userId = loggedInUserId;

  // Get the logged-in user
  const userUrl = `${baseUrl}/user/${userId}`;
  const userObj = await fetch(userUrl).then(res => res.json());
  // console.log(userObj)

  // Get the connections
  const connectionsUrl = `${baseUrl}/user/${userId}/connections`;
  const connectionsArr = await fetch(connectionsUrl).then(res => res.json());
  let connectionUserIds = [];
  connectionsArr.forEach(connection => {
    connectionUserIds.push(connection.userIds.filter(id => id !== userId)[0].toString());
  });
  // console.log(connectionUserIds);

  return {
    loggedInUser: userObj,
    connectionUserIds: connectionUserIds,
  };
}


export async function getPosts(request) {
  const postsUrl = `${baseUrl}/user/${request.params.userId}/posts`;
  const posts = await fetch(postsUrl).then(res => res.json());
  // console.log(posts)
  const userUrl = `${baseUrl}/user/${request.params.userId}`;
  const user = await fetch(userUrl).then(res => res.json());
  // console.log(user)
  return {
    user: user,
    posts: posts
  }
}


export async function getConnectionRequests(request) {
  // Get the connection requests for the logged-in user
  const connectionRequestUrl = `${baseUrl}/user/${loggedInUserId}/connectionRequests`;
  const connectionRequests = await fetch(connectionRequestUrl).then(res => res.json());
  // console.log(connectionRequests);
  return connectionRequests;
}
