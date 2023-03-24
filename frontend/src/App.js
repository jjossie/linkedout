import 'react-icons';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


// Project Imports
import './App.css';

import Main from "./components/top-level/Main";
import {loadConnectionRequests, loadFeed, loadPostsForUser, loadProfile} from "./services/loaders";
import Profile from "./components/top-level/Profile";
import User from "./components/top-level/User";
import ConnectionRequests from "./components/top-level/ConnectionRequests";
import SignInSide from "./components/top-level/Login";
import SignUp from "./components/top-level/Register";
import {createTheme, ThemeProvider} from "@mui/material";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: loadFeed,
  },
  {
    path: "/profile",
    element: <Profile/>,
    loader: loadProfile
  },
  {
    path: "/user/:userId",
    element: <User/>,
    loader: loadPostsForUser
  },
  {
    path: "/connectionRequests",
    element: <ConnectionRequests/>,
    loader: loadConnectionRequests
  },
  {
    path: "/login",
    element: <SignInSide/>
  },
  {
    path: "/register",
    element: <SignUp/>
  }
])

function App() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1080,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
