import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";

const TopFood = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('/topFood.json')
            .then(res => res.json())
            .then(data => setTopFoods(data))
    }, [])
    return (
        <div className="max-w-4xl mx-auto mt-20 flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl font-bold text-center mb-5">Top Foods</h1>
            <div className="grid grid-cols-3 gap-10">
                {
                    topFoods.map(topFood => <TopFoodCard key={topFood.id} topFood={topFood}></TopFoodCard>)
                }
            </div>
            <div>
                <Link to='/allFoodItems'><button className="btn btn-error">See All</button></Link>
            </div>
        </div>
    );
};

export default TopFood;