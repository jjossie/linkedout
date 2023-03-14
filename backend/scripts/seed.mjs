import ConnectionModel from "../models/Connection.js";
import ConnectionRequestModel from "../models/ConnectionRequest.js";
import PostModel from "../models/Post.js";
import UserModel from "../models/User.js";
import casual from "casual";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

await mongoose.connect(
  process.env.MONGODB_URI
);

await ConnectionModel.deleteMany();
await ConnectionRequestModel.deleteMany();
// await FeedModel.deleteMany();
await PostModel.deleteMany();
// await PrivateChatModel.deleteMany();
await UserModel.deleteMany();

const emptyArrayOfSize = (n = 0) => Array(n).fill(null);

const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const flipACoin = () => randomInteger(1, 100) > 50;

const userPromises = emptyArrayOfSize(100).map(() => {
  var firstName = casual.first_name;
  var lastName = casual.last_name;
  var email = casual.email;
  const user = new UserModel({ firstName, lastName, email });
  return user.save();
});

console.log("Users Created");

const users = await Promise.all(userPromises);

const postPromises = [];
users.map((u) => {
  const { _id: userId } = u;
  emptyArrayOfSize(10).forEach(() => {
    var createdAt = casual.moment.format();
    var content = casual.sentence;
    const post = new PostModel({ userId, createdAt, content });
    postPromises.push(post.save());
  });
});

await Promise.all(postPromises);

console.log("Posts Created");

const connectionPromises = [];
const idArray = users.map((u) => u._id);

for (let i = 0; i < idArray.length; i++) {
  const numberOfConnections = Math.floor(Math.random() * 20) + 1; // Random connections before 1-20 accounts.
  for (let k = 0; k < numberOfConnections; k++) {
    const connectionIndex =
      Math.floor(Math.random() * (idArray.length - i - 1)) + i + 1; // Returns a random index in idArray.
    if (idArray[connectionIndex] == null) continue;

    var userIds = [idArray[i].toString(), idArray[connectionIndex].toString()];

    // 50% of the time, make a connection. Otherwise, make a connection request
    if (flipACoin()) {
      const connection = new ConnectionModel({ userIds });
      connectionPromises.push(connection.save());
    } else {
      const senderId = userIds[0];
      const receiverId = userIds[1];
      const request = new ConnectionRequestModel({ senderId, receiverId });
      connectionPromises.push(request.save());
    }
  }
}

await Promise.all(connectionPromises);

console.log("Connections Created");

try {
  console.log("Database seeded");
  mongoose.connection.close();
} catch (e) {
  console.log(e);
}
