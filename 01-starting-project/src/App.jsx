import {createBrowserRouter, Link, RouterProvider} from "react-router-dom"
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import ProfilePage from "./pages/ProfilePage";
import RootLayout from "./pages/Root";
import Cerca from "./pages/Cerca";
import LoginPage from "./pages/LoginPage";
import CatalogoPage from "./pages/CatalogoPage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children: [
      {path: "/", element: <HomePage/>},
      {path:"/login", element :<LoginPage/>},
      {path:"/signup", element:<SignUp/>},
      {path: "/cart", element: <CartPage/>},
      {path:"/profile", element: <ProfilePage/>},
      {path:"search/:searchText", element: <Cerca/>},
      {path:"/catalog", element:<CatalogoPage/>},
      {path:"/product/:id", element:<ProductPage/>},
      {path:"admin/products", element:<AdminPage/>}
    ]
  }
]);
function App() {
  return (
    <RouterProvider router ={router}>
        </RouterProvider>
  );
}

export default App;

