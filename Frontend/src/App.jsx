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
          path: "/product/:productId",
          element: <Product />,
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
