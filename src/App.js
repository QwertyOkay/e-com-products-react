import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "components/Header";
import Footer from "components/Footer";
import HelmetHead from "components/HelmetHead/HelmetHead";
import "./styles/global.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer autoClose={2000} transition={Slide} theme="dark" />
    </>
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
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:category",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <HelmetHead />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
