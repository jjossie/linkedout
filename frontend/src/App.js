import 'react-icons';
import {RouterProvider, createBrowserRouter} from "react-router-dom";


// Project Imports
import './App.css';

import Main from "./components/top-level/Main";
import {getConnectionRequests, getConnections, getFeed, getPosts} from "./services/loaders";
import Profile from "./components/top-level/Profile";
import User from "./components/top-level/User";
import ConnectionRequests from "./components/top-level/ConnectionRequests";
import LoginPage from "./components/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: getFeed,
  },
  {
    path: "/profile",
    element: <Profile/>,
    loader: getConnections
  },
  {
    path: "/user/:userId",
    element: <User/>,
    loader: getPosts
  },
  {
    path: "/connectionRequests",
    element: <ConnectionRequests/>,
    loader: getConnectionRequests
  },
  {
    path: "/login",
    element: <LoginPage/>,
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
