import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddNewCoffee from "../pages/addNewCoffe/AddNewCoffee";
import ProductDetails from "../pages/productDetails/ProductDetails";
import UpdateCoffee from "../pages/updateCoffee/UpdateCoffee";
import ErrorPage from "../pages/errorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async()=> fetch('http://localhost:5000/coffees'),
      },
      {
        path: '/addNewCoffee',
        element: <AddNewCoffee></AddNewCoffee>
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: async({params})=> {
          return fetch(`http://localhost:5000/coffees/${params.id}`)
        }
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: async({params})=> {
          return fetch(`http://localhost:5000/coffees/${params.id}`)
        }
      }
    ]
  }
]);

export default router