const loggedInUserId = "63dbfc0d187fe1e57908cfe1" // Carolyn Lindgren

const baseUrl = "http://localhost:3430";

export async function getFeed({params}) {
  const feedUrl = `${baseUrl}/user/${loggedInUserId}/feed`;
  return await fetch(feedUrl).then(res => res.json());
}


export async function getConnections() {
  // This isn't even getting run?? wtf is up with react-browser-router??
  // What did I change?? why is the error message so useless?????
  // const userId = request.params.userId;
  const userId = loggedInUserId;

  // Get the logged-in user
  const userUrl = `${baseUrl}/user/${userId}`;
  const userResponse = await fetch(userUrl);
  const userObj = await userResponse.json();
  console.log(userObj)

  // Get the connections
  const connectionsUrl = `${baseUrl}/user/${userId}/connections`;
  const connectionsResponse = await fetch(connectionsUrl);
  const connectionsArr = await connectionsResponse.json();
  let connectionUserIds = [];
  connectionsArr.map(connection => {
    connectionUserIds.push(connection.userIds.filter(id => id !== userId)[0].toString());
  });
  console.log(connectionUserIds);

  return {
    loggedInUser: userObj,
    connectionUserIds: connectionUserIds,
  };
}


export async function getPosts(request) {

}


export async function getConnectionRequests(request) {

}
