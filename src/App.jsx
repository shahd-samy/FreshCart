import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./pages/Layout/Layout"
import { ToastContainer } from "react-toastify";
import ProductProvider from "./context/Products.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthProvider from "./context/Auth.context";
import CartProvider from "./context/Cart.context";
import WishListProvider from "./context/WishList.context";
import OrderProvider from "./context/Order.context";
import NotFound from "./pages/NotFound/NotFound";
import OfflineScreen from "./pages/OfflineScreen/OfflineScreen";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";

// Lazy load components
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const WishList = lazy(() => import('./pages/WishList/WishList'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword/ForgetPassword"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail/VerifyEmail"));
const ProductDetails = lazy(() => import("./pages/ProductDetails/ProductDetails"));
const Carts = lazy(() => import("./pages/Carts/Carts"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const Logout = lazy(() => import("./pages/Logout/Logout"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Products = lazy(() => import("./pages/Products/Products"));
const OrderDetail = lazy(() => import('./pages/OrderDetail/OrderDetail'));



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


                <Suspense fallback={<Loading />}>
                  <RouterProvider router={routes} ></RouterProvider>
                </Suspense>
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
