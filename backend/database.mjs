import { v4 } from "uuid";
import { DateTime } from "luxon";

export default class Database {
  // The eventual structure of this will be:
  //  {
  //    "user": {
  //              "userId1": {}
  //              "userId2": {}
  //            },
  //    "posts": {
  //               "postId1": {}
  //             }
  //  }
  data = {};

  constructor() {
    // This code creates some simulated data for testing
    // It creates the following:
    //  - 3 users
    //  - user1 and user2 will have a connection between them
    //  - user3 will send a connection request to user2
    //  - a chat message between user 1 and user3
    //  - user3 will have a single social post

    // Note: I'm supplying the userIds here so it's easier to test
    // The other objects are created each time the app starts so they will have different
    // ids each app run
    const user1 = this.createUser({
      userId: "user:736ea62d-e5de-410c-b704-48326f3f41d8",
      firstName: "Luke",
      lastName: "Skywalker",
      email: "luke@skywalker.com",
    });

    const user2 = this.createUser({
      userId: "user:0243b85c-1410-46de-bb44-d823aeea49ef",
      firstName: "Obi-Wan",
      lastName: "Kenobi",
      email: "obi@kenobi.com",
    });

    const user3 = this.createUser({
      userId: "user:a3ea25c3-6c54-4dd3-bbf7-d85018718b99",
      firstName: "Darth",
      lastName: "Vader",
      email: "darth@galacticempire.com",
    });

    console.log();
    console.log("Sample Users:");
    console.log(`   ${user1.userId} ${user1.firstName}`);
    console.log(`   ${user2.userId} ${user2.firstName}`);
    console.log(`   ${user3.userId} ${user3.firstName}`);
    // console.log("Sample Database:");
    // console.log(JSON.stringify(this.data));
    // console.log(JSON.stringify(this.data, ()=> {}, "\n"));

    // Luke and Obi-Wan are already connected
    const connection = this.createConnection({
      userIds: [user1.userId, user2.userId],
    });

    // Darth Vader trying to connect with Obi-Wan
    const connectionRequest = this.createConnectionRequest({
      senderId: user3.userId,
      receiverId: user2.userId,
    });

    // Chat between Darth Vader and Luke Skywalker
    const chat = this.createPrivateChat({
      userIds: [user3.userId, user1.userId],
    });

    // Chat message from Darth Vader and Luke Skywalker
    const message = this.createPrivateChatMessage({
      chatId: chat.chatId,
      senderId: user3.userId,
      content: "Luke, I am your Father.",
    });

    const post = this.createPost({
      userId: user3.userId,
      createdAt: DateTime.now().toString(),
      content: "I'm just over here building the death star...",
    });
  }

  _ensureKeyExists(key) {
    if (!this.data[key]) {
      this.data[key] = {};
    }
  }

  _generateId(key) {
    return `${key}:${v4()}`;
  }

  _createData(key, data) {
    this._ensureKeyExists(key);
    const id = data[`${key}Id`] || this._generateId(key);
    this.data[key][id] = {
      [`${key}Id`]: id,
      ...data,
    };
    return this._dataById(key, id);
  }

  _updateData(key, id, data) {
    this._ensureKeyExists(key);
    const item = this.data[key][id];
    if (!item) return null;
    const updatedItem = {
      ...item,
      ...data,
    };
    this.data[key][id] = updatedItem;
    return this._dataById(key, id);
  }

  _deleteById(key, id) {
    this._ensureKeyExists(key);
    delete this.data[key][id];
  }

  _dataById(key, id) {
    this._ensureKeyExists(key);
    return this.data[key][id];
  }

  // Get all objects for a certain key, such as the "users" key
  _allForKey(key) {
    this._ensureKeyExists(key);
    return Object.values(this.data[key]);
  }

  // User Methods
  createUser(user) {
    return this._createData("user", user);
  }

  updateUser(userId, updates) {
    return this._updateData("user", userId, updates);
  }

  deleteUser(userId) {
    this._deleteById("user", userId);
  }

  userById(userId) {
    return this._dataById("user", userId);
  }

  allUsers() {
    return this._allForKey("user");
  }
  // End User Methods

  // Connection Request Methods
  createConnectionRequest(request) {
    return this._createData("connectionRequest", request);
  }

  updateConnectionRequest(requestId, updates) {
    return this._updateData("connectionRequest", requestId, updates);
  }

  deleteConnectionRequest(requestId) {
    this._deleteById("connectionRequest", requestId);
  }

  connectionRequestById(requestId) {
    return this._dataById("connectionRequest", requestId);
  }

  allConnectionRequests() {
    return this._allForKey("connectionRequest");
  }
  // End Connection Request Methods

  // Connection Methods
  createConnection(connection) {
    return this._createData("connection", connection);
  }

  updateConnection(connectionId, updates) {
    return this._updateData("connection", connectionId, updates);
  }

  deleteConnection(requestId) {
    this._deleteById("connection", requestId);
  }

  connectionById(requestId) {
    return this._dataById("connection", requestId);
  }

  allConnections() {
    return this._allForKey("connection");
  }
  // End Connection Methods

  // Post Methods
  createPost(post) {
    return this._createData("post", post);
  }

  updatePost(postId, updates) {
    return this._updateData("post", postId, updates);
  }

  deletePost(postId) {
    this._deleteById("post", postId);
  }

  postById(postId) {
    return this._dataById("post", postId);
  }

  allPosts() {
    return this._allForKey("post");
  }
  // End Post Methods

  // Private Chat Methods
  createPrivateChat(chat) {
    return this._createData("privateChat", chat);
  }

  updatePrivateChat(chatId, updates) {
    return this._updateData("privateChat", chatId, updates);
  }

  deletePrivateChat(chatId) {
    this._deleteById("privateChat", chatId);
  }

  privateChatById(chatId) {
    return this._dataById("privateChat", chatId);
  }

  allPrivateChats() {
    return this._allForKey("privateChat");
  }
  // End Private Chat Methods

  // Private Chat Message Methods
  createPrivateChatMessage(message) {
    return this._createData("privateChatMessage", message);
  }

  updatePrivateChatMessage(messageId, updates) {
    return this._updateData("privateChatMessage", messageId, updates);
  }

  deletePrivateChatMessage(messageId) {
    this._deleteById("privateChatMessage", messageId);
  }

  privateChatMessageById(messageId) {
    return this._dataById("privateChatMessage", messageId);
  }

  allPrivateChatMessages() {
    return this._allForKey("privateChatMessage");
  }
  // End Private Chat Message Methods
}
