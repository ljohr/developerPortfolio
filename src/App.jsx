import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import 'normalize.css';
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScopeApp from "./pages/ScopeApp";
import ScopeScraper from "./pages/ScopeScraper";
import LingClub from "./pages/LingClub";
import Mfq from "./pages/Mfq";
import StyleChecker from "./pages/StyleChecker";

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
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/scope",
        element:<ScopeApp />
      },
      {
        path:"/web-scraper",
        element:<ScopeScraper />
      },
      {
        path:"/ling-club",
        element:<LingClub />
      },
      {
        path:"/mfq",
        element:<Mfq />
      },
      {
        path:"/c-style-checker",
        element:<StyleChecker />
      },
    ]
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
