import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";

const TopFood = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('/topFood.json')
        .then(res => res.json())
        .then(data => setTopFoods(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <h1>Top Foods</h1>
            <div className="grid grid-cols-3 gap-10">
                {
                    topFoods.map(topFood => <TopFoodCard key={topFood.id} topFood={topFood}></TopFoodCard>)
                }
            </div>
        </div>
    );
};

export default TopFood;