import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const TopFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/topFoods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    const topSix = foods.slice(0, 6)

    return (
        <div className="max-w-4xl mx-auto mt-20 flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl font-bold text-center mb-5">Top Foods</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    topSix.map(topFood => <TopFoodCard key={topFood._id} topFood={topFood}></TopFoodCard>)
                }
            </div>
            <div>
                <Link to='/allFoodItems'><button className="btn-md bg-orange-600 text-lg text-white rounded px-7">See All</button></Link>
            </div>
        </div>
    );
};

export default TopFood;