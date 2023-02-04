# Topic 2: Programming Assignment 2

This assignment expands on what we learned in Topic 2: Programming Assignment 1. A functional backend has many APIs that allow access to many different kinds of data. It also can expose relationships between that data.

## Requirements

- Once you have accepted the assignment in Canvas, clone the repository to your computer.
- Create a branch called **t2-pa2**.
- In [backend](../backend) create a new node project with `npm init`
- Create a basic express app. You can use the following express tutorials:
  - [Getting Started](https://expressjs.com/en/starter/installing.html)
  - [Hello World](https://expressjs.com/en/starter/hello-world.html)
- Install the `nodemon` and `uuid` packages with `npm`. (`uuid` is needed for `database.js`)
- **Create _GET_, _POST_, _PUT_, and _DELETE_ APIs for the following data objects and their structure:**
  - **user**: a user on the network
    - userId
    - firstName
    - lastName
    - email
  - **connectionRequest**: A request to connect with another user on the network
    - requestId
    - senderId
    - receiverId
  - **connection**: A connection between two users on the network
    - connectionId
    - userIds
  - **post**: A post created by a user on the network
    - postId
    - userId
    - createdAt
    - content
  - **privateChat**: A private message thread between users on the network
    - chatId
    - userIds
  - **privateChatMessage**: A message sent to a private chat
    - chatId
    - messageId
    - senderId
    - content
- **Create the following _GET_ APIs:**
  - `/users/:userId/connectionRequests`
    - connection requests sent to a single user
  - `/users/:userId/connections`
    - all connections for a single user
  - `/users/:userId/chats`
    - private chats for a single user
  - `/users/:userId/posts`
    - posts created by a single user
- **Design one more API of your choosing with the following requirements:**
  - Look at your LinkedIn homepage
  - Find a UI element that is not supported by our API set
  - Design and create an API that will supply the data needed for that UI element. You don't necessarily need to use `database.js`. You can use dummy data if you'd like.

## Hints

- JavaScript has two methods on arrays called `filter` and `includes` that will come in handy.

## Notes

- Use `database.js` to simulate interacting with a database, but you _shouldn't to modify it in any way_.
- The Express documentation uses `require` statements. We are using ES6 Modules, so we'll be using `import` statements instead, like this: `import express from 'express'`

## Deliverable

Once you have completed the requirements, please create a pull request for your branch (which should be called **t2-pa2**) and submit the link to the **pull request** in Canvas.
