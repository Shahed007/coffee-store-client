import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddNewCoffee from "../pages/addNewCoffe/AddNewCoffee";
import ProductDetails from "../pages/productDetails/ProductDetails";
import UpdateCoffee from "../pages/updateCoffee/UpdateCoffee";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Users from "../pages/users/users";
import SignIn from "../pages/login-signUp/SignIn";
import SignUp from "../pages/login-signUp/SignUp";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async()=> fetch('https://my-coffee-store-server-42luiy345-md-shaheds-projects.vercel.app/coffees'),
      },
      {
        path: '/addNewCoffee',
        element: <AddNewCoffee></AddNewCoffee>
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: async({params})=> {
          return fetch(`https://my-coffee-store-server-42luiy345-md-shaheds-projects.vercel.app/coffees/${params.id}`)
        }
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: async({params})=> {
          return fetch(`https://my-coffee-store-server-42luiy345-md-shaheds-projects.vercel.app/coffees/${params.id}`)
        }
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: async()=> fetch('https://my-coffee-store-server-42luiy345-md-shaheds-projects.vercel.app/users')
      },
      {
        path: '/SignIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/SignUp',
        element: <SignUp></SignUp>
      }
    ]
  }
]);

export default router