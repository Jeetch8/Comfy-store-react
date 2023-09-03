import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Products,
  Register,
  SingleProduct,
  Profile,
  WishList,
} from "./pages";

import {
  ErrorElement,
  Address as ProfileAddressCol,
  Authentication as ProfileAuthenticationCol,
  MainProfile,
  Orders as ProfileOrdersCol,
  PaymentMethods as ProfilePaymentsCol,
} from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./components/Profile/Orders";
// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";
import { store } from "./store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: "wishlist",
        element: <WishList />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <ErrorElement />,
        children: [
          {
            index: true,
            element: <MainProfile />,
          },
          {
            path: "payment_methods",
            element: <ProfilePaymentsCol />,
          },
          {
            path: "address",
            element: <ProfileAddressCol />,
          },
          {
            path: "authentication",
            element: <ProfileAuthenticationCol />,
          },
          {
            path: "orders",
            element: <ProfileOrdersCol />,
            loader: ordersLoader(store, queryClient),
          },
        ],
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
