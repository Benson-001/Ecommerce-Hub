import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Myaccount from "./pages/Myaccount";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Announcements from "./components/Announcements";
import Product from "./pages/Product"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProductList from "./pages/ProductList";
import Order from "./pages/Order";



function App() {
  const Layout = () => {
    return (
      <div>
        <Announcements />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/create-account",
          element: <Register />,
        },
        {
          path: "/myaccount",
          element: <Myaccount />,
        },
        {
          path: "/products/:search",
          element: <ProductList />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
        {
          path: "/orders",
          element: <Order/>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
