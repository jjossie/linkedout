# Topic 5: Programming Assignment 2

In this assignment you will create several routes in our client application for different pages of our professional network. We will also make use of APIs to populate our pages with data.

## Requirements

- After you have downloaded this file, place it in your `professional-network` repository in the `projects` directory.
- Create a branch called **t5-pa2**.
- `npm install react-router-dom` inside the frontend directory.
- Setup React Router in `App.js`
- Create the following routes with react router:
  - `/`
  - `/profile`
  - `/user/:userId`
  - `/connectionRequests`
- Create React components for each new route
- Each route should also have a `loader`, which will fetch data from the backend
  - You will use the following routes from the backend:
    - `/users/:userId/feed` (for the main page)
    - `/users/:userId/connections` (for the profile)
    - `/users/:userId/posts` (for the user page)
    - `/users/:userId/connectionRequests` (for connectionRequests)
- Create a header component that will go at the top of each page
  - It should look like the header from LinkedIn
- You should use LinkedIn as a design reference
- You should use the `ProfileHeader` and `PostPrompt` components that you previously created in your new pages
  - The `ProfileHeader` should be used on the `/profile` page and the `/user/:userId` page
