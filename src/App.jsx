import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./pages/Layout/Layout"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import WishList from './pages/WishList/WishList';
import SignUp from './pages/SignUp/SignUp';
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Carts from "./pages/Carts/Carts";
import Orders from "./pages/Orders/Orders";
import Logout from "./pages/Logout/Logout";
import { ToastContainer } from "react-toastify";
import ProductProvider from "./context/Products.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthProvider from "./context/Auth.context";
import CartProvider from "./context/Cart.context";
import Checkout from "./pages/Checkout/Checkout";
import WishListProvider from "./context/WishList.context";
import Products from "./pages/Products/Products";
import OrderProvider from "./context/Order.context";
import OrderDetail from './pages/OrderDetail/OrderDetail';
import NotFound from "./pages/NotFound/NotFound";
import OfflineScreen from "./pages/OfflineScreen/OfflineScreen";



function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "wishlist", element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: "cart", element: <ProtectedRoute><Carts /></ProtectedRoute> },
        { path: "logout", element: <ProtectedRoute><Logout /></ProtectedRoute> },
        { path: "orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: "orders/:id", element: <ProtectedRoute><OrderDetail /></ProtectedRoute> },


        { path: "products", element: <Products /> },
        { path: "product/:id", element: <ProductDetails /> },


        { path: "verify-email", element: <VerifyEmail /> },
        { path: "checkout", element: <ProtectedRoute><Checkout /></ProtectedRoute> },
{path:'*', element:<NotFound></NotFound>}

      ]
    }

  ])
  // console.log(routes)
  return (
    <>
    <OfflineScreen>
        <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <WishListProvider>
              <OrderProvider>


                <RouterProvider router={routes} ></RouterProvider>
                <ToastContainer position="top-right" autoClose={3000} />


              </OrderProvider>
            </WishListProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>

    </OfflineScreen>
    </>
  )
}

export default App
