import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/Home/HomePage";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import AllFoods from "../pages/AllFoods/AllFoods";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddItems from "../pages/AddItems/AddItems";
import PrivateRoute from "./PrivateRoute";
import AddedItems from "../pages/AddedItems/AddedItems";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/allFoodItems',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addItems',
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
            },
            {
                path: '/addedItems',
                element: <PrivateRoute><AddedItems></AddedItems></PrivateRoute>
            }
        ]
    }
])

export default router;