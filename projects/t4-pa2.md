# Topic 4: Programming Assignment 2

In this assignment we will modify our database to actually be a database. What a great idea! It won't be as fast, but the data will stay around. I feel like this is a good feature for a database. Also, it will still be pretty fast because Mongo is a good database when used correctly.

All changes we make will be in the backend project.

## Requirements

- After you have downloaded this file, place it in your `professional-network` repository in the `projects` directory.
- Create a branch called **t4-pa2**.
- Create a `models` and `controllers` folder in the root of the backend folder
- Create a `Schema` with `Mongoose` for the following resource types, each in their own file:
  - **User** (in models/user.js)
  - **ConnectionRequest** (in models/connectionRequest.js)
  - **Connection** (in models/connection.js)
  - **Post** (in models/post.js)
  - **PrivateChat** (in models/privateChat.js)
  - **PrivateChatMessage** (in models/privateChatMessage.js)
- Create the methods in `controllers/userController.js` with the following method signatures:
  - `connectionRequestsForUserId(userId) {}`
  - `connectionForUserId(userId) {}`
  - `privateChatsForUserId(userId) {}`
  - `postsForUserId(userId) {}`
- Modify `app.js` to use these new controller methods instead of the methods in database.js
- Create another new method in `controllers/userController.js` called `feedForUserId(userId) {}`, with the following requirements:
  - The feed should consist of two different resources that would be useful to the user:
    - New connections requests
    - Posts from established connections
- Create a new route in `app.js` with the following url and use the new `feedForUserId` method:
  - `/users/:userId/feed`

## Hints:

- The new methods in `userController.js` should no longer user `filter` to find the correct documents like they did in `app.js`. You must use queries to find the appropriate data.
