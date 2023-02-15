import {
  ConnectionModel,
  ConnectionRequestModel,
  FeedModel,
  PostModel,
  PrivateChatModel,
  UserModel,
} from "../models/index.js";
import casual from "casual";
import mongoose from "mongoose";

await mongoose.connect(
  "mongodb+srv://students:RILnPuIPTo92RCu4@winter2023.inr9f0r.mongodb.net/Joel?retryWrites=true&w=majority"
);

await ConnectionModel.deleteMany();
// await ConnectionRequestModel.deleteMany();
// await FeedModel.deleteMany();
await PostModel.deleteMany();
// await PrivateChatModel.deleteMany();
await UserModel.deleteMany();

const EmptyArray = (n = 0) => Array(n).fill(null);

const userPromises = EmptyArray(100).map(() => {
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
  EmptyArray(10).forEach(() => {
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
  const numberOfConnections = Math.floor(Math.random() * 10) + 1; // Random connections before 1-10 accounts.
  for (let k = 0; k < numberOfConnections; k++) {
    const connectionIndex =
      Math.floor(Math.random() * (idArray.length - i - 1)) + i + 1; // Returns a random index in idArray.
    if (idArray[connectionIndex] == null) continue;
    var userIds = [idArray[i].toString(), idArray[connectionIndex].toString()];
    const connection = new ConnectionModel({ userIds });
    connectionPromises.push(connection.save());
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
