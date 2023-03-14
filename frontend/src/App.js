import 'react-icons';
import {RouterProvider, createBrowserRouter} from "react-router-dom";


// Project Imports
import './App.css';

import Main from "./components/top-level/Main";
import {loadConnectionRequests, loadProfile, loadFeed, loadPostsForUser} from "./services/loaders";
import Profile from "./components/top-level/Profile";
import User from "./components/top-level/User";
import ConnectionRequests from "./components/top-level/ConnectionRequests";
import LoginPage from "./components/top-level/Login";
import RegisterPage from "./components/top-level/Register";
import SignInSide from "./components/top-level/Login";
import SignUp from "./components/top-level/Register";



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
  return <RouterProvider router={router}/>;
}

export default App;
