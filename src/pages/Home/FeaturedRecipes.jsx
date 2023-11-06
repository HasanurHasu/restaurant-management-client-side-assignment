import { useEffect } from "react";
import { useState } from "react";
import FeaturedRecipesCard from "./FeaturedRecipesCard";


const FeaturedRecipes = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('/topFood.json')
            .then(res => res.json())
            .then(data => setTopFoods(data))
    }, [])

    return (
        <div className="mt-12 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-3">Featured Recipes</h1>
            <p className="text-center w-1/2 mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cumque assumenda, ullam illo consectetur quam voluptate dolores facere aut est!</p>
            <div className="grid grid-cols-3 gap-10">
                {
                    topFoods.map(topFood => <FeaturedRecipesCard key={topFood.id} topFood={topFood}></FeaturedRecipesCard>)
                }
            </div>
            
        </div>
    );
};

export default FeaturedRecipes;