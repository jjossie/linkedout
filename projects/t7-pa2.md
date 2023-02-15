# Topic 7: Programming Assignment 2

In this assignment, you will create user registration and login routes. You will also secure the specific routes to only work if the user has presented a token.

## Requirements

- After you have downloaded this file, place it in your `professional-network` repository in the `projects` directory.
- Create a branch called **t7-pa2**.
- Create a `PasswordModel` for storing hashed passwords
- Create two new routes in your backend repository:
  - `/user/register`
    - This will end up being very similar to Programming Assignment 1
  - `/user/login`
    - This will also be very similar to Programming Assignment 2
- Create a middleware that will parse the `Authorization: Bearer` header
  - If the token is present, verify the token, fetch the user from the database, and put the user object on the request
  - If no token is present, do nothing
- Change the following routes:
  - `/users/:userId/feed` -> `/user/feed`
  - `/users/:userId/connectionRequests` -> `/user/connectionRequests`
  - Modify these routes to only work _if_ a token is present, otherwise return a 403
- Modify `/users/:userId/posts` and `/user/:userId/connections` to enforce the following:
  - When a token is present in the request
    - If `:userId` is a connection, return the requested data
    - If `:userId` is not a connection, return 403
  - If a token is not present, return 403
- Create `/user/connections`. It will work only when a token is present in the request, but otherwise will function the same way that `/user/:userId/connections` does

## Notes

- Routes that are protected should have the authentication middleware installed. Not _all_ routes will need it.

## Submission

After you have finished the requirements, create a pull request from your branch. Then, submit the link to your pull request.
