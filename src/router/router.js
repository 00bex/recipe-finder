import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import RecipeDetails from "../Pages/Recipedetails";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    
    },
    {
        path: "/recipe/:id",
        Component: RecipeDetails
    }
]);
export default router;
