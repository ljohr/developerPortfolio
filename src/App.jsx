import "./App.css";
import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "normalize.css";
import Home from "./pages/Home";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

axios.defaults.baseURL = "http://localhost:4000";

const LayOut = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogHome />,
      },
      {
        path: "/blog/:title",
        element: <BlogPost />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
