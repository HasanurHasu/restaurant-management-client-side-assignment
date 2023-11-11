import { useContext } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const TopFood = () => {
    const { foods } = useContext(AuthContext);

    return (
        <div className="max-w-4xl mx-auto mt-20 flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl font-bold text-center mb-5">Top Foods</h1>
            <div className="grid grid-cols-3 gap-10">
                {
                    foods.map(topFood => <TopFoodCard key={topFood._id} topFood={topFood}></TopFoodCard>)
                }
            </div>
            <div>
                <Link to='/allFoodItems'><button className="btn-md bg-orange-600 text-lg text-white rounded px-7">See All</button></Link>
            </div>
        </div>
    );
};

export default TopFood;