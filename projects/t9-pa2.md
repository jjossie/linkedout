# Topic 9: Programming Assignment 2

In this assignment, you will create a registration page for your professional network.

## Requirements

- Create a new route in your frontend app called `/register`
  - Create a `Register` component that has 4 text boxes
    - First Name
    - Last Name
    - Email
    - Password
  - The new `Register` component should call your backend register api endpoint to register a new user
  - If the registration is successful, you should redirect the user to the main page
    - You will need to modify your backend `/user/register` endpoint to return a token on successful registration
  - You must handle the following error cases on the registration page:
    - email address already taken
    - bad password
    - registration failed
  - You will need to modify your backend `/user/register` endpoint to send back error codes for different error scenarios
- Add a logout button in your frontend header that will:
  - clear the user token from local storage
  - redirect the user to the login page
- Modify the login page to have a link to the registration page
- The registration page should also have a link to go to the login page

## Additional Weekly Requirements

You should spend a couple of hours working on the styling of your Professional Network app. You can use any of the following for styling:

- https://styled-components.com/
- Global Stylesheets
- Style Sheet per component
- Inline CSS
- React Material UI Components

You can also view [this resource](https://www.pluralsight.com/guides/best-practices-styling-react-components) for help deciding which way you like best.

## Hints

- `react-router-dom` provides `useNavigation`, make sure to use that when you need to redirect to different pages
