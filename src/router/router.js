import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import RecipeDetails from "../Pages/RecipeDetails";
import About from "../Pages/About";
import Categories from "../Pages/Categories";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    
    },
    {
        path: "/recipe/:id",
        Component: RecipeDetails
    },
    {
        path: "/about",
        Component: About
    },
    {
        path: "/categories",
        Component: Categories
    }
]);
export default router;
