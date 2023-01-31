# Topic 4: Programming Assignment 2

In this assignment we will modify our database to actually be a database. What a great idea! It won't be as fast, but the data will stay around. I feel like this is a good feature for a database. Also, it will still be pretty fast because Mongo is a good database when used correctly.

All changes we make will be in the backend project.

## Requirements

- After you have downloaded this file, place it in your `professional-network` repository in the `projects` directory.
- Create a branch called **t4-pa2**.
- Create a `models` and `controllers` folder in the root of the backend folder
- Create a `Schema` with `Mongoose` for the following resource types, each in their own file:
  - **User** (in models/user.mjs)
  - **ConnectionRequest** (in models/connectionRequest.mjs)
  - **Connection** (in models/connection.mjs)
  - **Post** (in models/post.mjs)
  - **PrivateChat** (in models/privateChat.mjs)
  - **PrivateChatMessage** (in models/privateChatMessage.mjs)
- Create the methods in `controllers/userController.mjs` with the following method signatures:
  - `connectionRequestsForUserId(userId) {}`
  - `connectionForUserId(userId) {}`
  - `privateChatsForUserId(userId) {}`
  - `postsForUserId(userId) {}`
- Modify `app.mjs` to use these new controller methods instead of the methods in database.js
- Create another new method in `controllers/userController.mjs` called `feedForUserId(userId) {}`, with the following requirements:
  - The feed should consist of two different resources that would be useful to the user:
    - New connections requests
    - Posts from established connections
- Create a new route in `app.mjs` with the following url and use the new `feedForUserId` method:
  - `/users/:userId/feed`

## Hints:

- The new methods in `userController.mjs` should no longer user `filter` to find the correct documents like they did in `app.mjs`. You must use queries to find the appropriate data.
