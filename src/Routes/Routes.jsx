import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllPlants from "../Pages/AllPlants";
import AddPlants from "../Pages/AddPlants";
// import MyPlants from "../Pages/MyPlants";
import ErrorPages from "../Pages/ErrorPages";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import UpdatePlants from "../Pages/UpdatePlants";
import DashBord from "../Dashbord/DashBord";
import MainDashbord from "../Dashbord/MainDashbord";
import Dashboard from "../Dashbord/DashBord";
import MyPlants from "../Pages/MyPlants";
import Profile from "../Profile/Profile";
import AboutUs from "../Pages/AboutUs";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import DashBordHome from "../Dashbord/DashBordHome";

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
        element: <AllPlants></AllPlants>
      },
    
      // {
      //   path: "/addplants",
      //   element: <PrivateRoute> <AddPlants></AddPlants> </PrivateRoute>
      // },
      // {
      //   path: "/myplants",
      //   loader: () => fetch(`https://assignment-server-side-sage.vercel.app/plants`),
      //   element: (
      //     <PrivateRoute>
      //       <MyPlants></MyPlants>,
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/viewDetails/:id",
        loader: () => fetch(`https://assignment-server-side-sage.vercel.app/plants`),
        element: (
          <PrivateRoute>
            
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path:'/updateplants/:id',
        loader: () => fetch(`https://assignment-server-side-sage.vercel.app/plants/`),
        element: <UpdatePlants></UpdatePlants>
      },
      {
        path:'/aboutus',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/contacts',
        element: <Contact></Contact>
      }
    ],
  },
    {
        path:'/dashbord',
        element:<Dashboard></Dashboard>,
       children:[
          {
            path:'addplants',
            element: <AddPlants></AddPlants>
          },
           {
        path: "myplants",
        loader: () => fetch(`https://assignment-server-side-sage.vercel.app/plants`),
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>,
          </PrivateRoute>
        ),
      },
      {
        path:'profile',
        element: <Profile></Profile>
      },
      {
        path:'home',
        element: <DashBordHome></DashBordHome>
      }
     

       ]
    

      },
]);
