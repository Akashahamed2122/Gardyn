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

export const router = createBrowserRouter([
  {
    path: "/",
     errorElement: <ErrorPages></ErrorPages>,
    element: <MainLayout></MainLayout>,
    children: [
        {
            path:'/',
            element: <Home></Home>
            
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/allplants',
          loader: ()=> fetch(`http://localhost:5000/plants`),
          element: <PrivateRoute> <AllPlants></AllPlants> </PrivateRoute>
        },
        {
          path:'/addplants',
          element: <AddPlants></AddPlants>
        },
        {
          path:'/myplants',
          element: <MyPlants></MyPlants>
        },
        {
          path:'/viewDetails/:id',
          loader: ()=> fetch(`http://localhost:5000/plants`),
          element: <PrivateRoute> <ViewDetails></ViewDetails> </PrivateRoute>
        }
        


    ]
  },
]);