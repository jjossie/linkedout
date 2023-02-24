# Topic 8: Programming Assignment 2

In this assignment, you will create a simple login page. After calling the login API, you will then use a token for future API requests.

This is a half week, so the new material will be presented on Thursday. In order to accommodate the shorter week, there will only be this single assignment.

## Requirements

- Create a new route in your frontend app called `/login`
  - The new Login component should have 2 text boxes, one for username/email and one for password
  - The new `/login` route should call your backend login api to get a token
  - If the login is unsuccessful, you should display an error message
  - If the login is successful, the token should be stored in local storage so that it can be used across sessions
- If token is present in local storage, it should be sent as a header to all requests to the api
- After a successful login, the user should be redirected back to the main page
- The following pages should use the token after the proceeding steps are complete:
  - `/`
  - `/profile`
  - `/user/:userId`
  - `/connectionRequests`
- If there is no token preset, the app should redirect you to the login page.

## Additional Weekly Requirements

You should spend a couple of hours working on the styling of your Professional Network app. You can use any of the following for styling:

- https://styled-components.com/
- Global Stylesheets
- Style Sheet per component
- Inline CSS

You can also view [this resource](https://www.pluralsight.com/guides/best-practices-styling-react-components) for help deciding which way you like best.
