import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllPlants from "../Pages/AllPlants";
import AddPlants from "../Pages/AddPlants";
import MyPlants from "../Pages/MyPlants";
import ErrorPages from "../Pages/ErrorPages";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import UpdatePlants from "../Pages/UpdatePlants";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPages></ErrorPages>,
    element: <MainLayout></MainLayout>,
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
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allplants",
        loader: () => fetch(`https://assignment-server-side-sage.vercel.app/plants`),
        element: (
          <PrivateRoute>
            {" "}
            <AllPlants></AllPlants>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/addplants",
        element: <AddPlants></AddPlants>,
      },
      {
        path: "/myplants",
        loader: () => fetch(`https://assignment-server-side-sage.vercel.app/plants`),
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>,
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetails/:id",
        loader: () => fetch(`https://assignment-server-side-sage.vercel.app/plants`),
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetails></ViewDetails>{" "}
          </PrivateRoute>
        ),
      },
      {
        path:'/updateplants/:id',
        loader: () => fetch(`https://assignment-server-side-sage.vercel.app/plants/`),
        element: <UpdatePlants></UpdatePlants>
      }
    ],
  },
]);
