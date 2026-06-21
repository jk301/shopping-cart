// routes.jsx
import { createBrowserRouter } from "react-router";

import { Layout } from "./components/layout/layout";
import { Home } from "./pages/home/home";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
])
