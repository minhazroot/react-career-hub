import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./Main-Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Statistics from "./Pages/Statistics/Statistics";
import AppliedLobs from "./Pages/AppliedLobs/AppliedLobs";
import Blog from "./Pages/Blog/Blog";
import Error from "./Pages/Error/Error";
import JobDetels from "./component/JobDetels/JobDetels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      }, {
        path: "/Job/:JobId",
        element: <JobDetels></JobDetels>,
        loader: () => fetch("../jobs.json")

      },
      {
        path: "/AppliedLobs",
        element: <AppliedLobs></AppliedLobs>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);