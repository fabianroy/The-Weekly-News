import Home from "../pages/Home";
import Root from "./../layouts/Root";
import { createBrowserRouter } from "react-router-dom";
import Login from './../pages/Login';
import Register from "../pages/Register";
import Error from './../pages/Error';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('news.json'),
        }, 
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }

      ]
    },
  ]);

  export default router;