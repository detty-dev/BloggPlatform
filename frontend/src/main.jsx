import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'
import UserProfile from './pages/UserProfile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
      {
        path: "/post/:id",
        element: <SinglePost/>,
  },
    {
      path: "/user/:id",
      element: <UserProfile/>,
},
]);
  
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
    <App />
  </React.StrictMode>,
)
