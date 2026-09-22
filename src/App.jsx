import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import NavBar from "./component/navbar/NavBar";
import Footer from "./component/footer/Footer";
import Menu from "./component/menu/Menu";
import Login from "./pages/login/Login";
import UserDetails from "./component/users/UserDetails";

// import UserSinglePage from "./pages/singlePages/userSinglePage";
function App() {

  // i use layout for the section i want to always see
  const Layout = () => {
    return (
      <div className="main bg-white">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
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
          path: "/users", 
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <UserDetails/>
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
