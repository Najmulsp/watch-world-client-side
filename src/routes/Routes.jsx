import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/Home";
import Login from "../authentication/Login";
import Register from "../authentication/Register";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },      
        {
            path: "/login",
            element: <Login></Login>,
        },      
        {
            path: "/register",
            element: <Register></Register>,
        },      
      ],
    },
  ]);