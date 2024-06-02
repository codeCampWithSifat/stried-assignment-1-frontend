import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../pages/AddItem/AddItem";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import EditService from "../pages/Dashboard/EditService/EditService";
import ServiceDetail from "../pages/Dashboard/ServiceDetail/ServiceDetail";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/additem",
        element: (
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboardHome",
        element: <DashboardHome />,
      },
      {
        path: "editService/:id",
        element: <EditService />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "serviceDetail/:id",
        element: <ServiceDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "myProfile",
        element: <MyProfile />,
      },
    ],
  },
]);
