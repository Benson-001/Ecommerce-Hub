import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Myaccount from "./pages/Myaccount";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Announcements from "./components/Announcements";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";


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
          path: "/myaccount",
          element: <Myaccount />,
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
