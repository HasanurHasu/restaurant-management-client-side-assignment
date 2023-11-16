import { useContext } from "react";
import FeaturedRecipesCard from "./FeaturedRecipesCard";
import { AuthContext } from "../../provider/AuthProvider";


const FeaturedRecipes = () => {
    const { foods } = useContext(AuthContext)

    const featuredFood = foods.slice(0, 3);

    return (
        <div className="mt-12 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-3">Featured Recipes</h1>
            <p className="text-center w-1/2 mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cumque assumenda, ullam illo consectetur quam voluptate dolores facere aut est!</p>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 mx-6 md:mx-5 lg:mx-0">
                {
                    featuredFood.map(food => <FeaturedRecipesCard key={food._id} food={food}></FeaturedRecipesCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedRecipes;