import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Products from "./pages/Products";
import Cart from "./pages/Cart";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuceess";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "cart",
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                )
            },

            {
                path: "payment",
                element: (
                    <ProtectedRoute>
                        <Payment />
                    </ProtectedRoute>
                )
            },

            {
                path: "success",
                element: <OrderSuccess />
            },

            {
                path: "login",
                element: <Login />
            },

            {
                path: "register",
                element: <Register />
            }

        ]
    }
]);

export default router;