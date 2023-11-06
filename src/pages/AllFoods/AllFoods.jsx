import { useEffect, useState } from "react";
import AllFoodsCard from "./AllFoodsCard";


const AllFoods = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('/topFood.json')
            .then(res => res.json())
            .then(data => setTopFoods(data))
    }, [])
    return (
        <div className="mt-5 max-w-6xl mx-auto">
            <h1 className="text-3xl text-center font-bold">All Foods</h1>
            <div  className="grid grid-cols-3 gap-8">
                {
                    topFoods.map(topFood => <AllFoodsCard key={topFood.id} topFood={topFood}></AllFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;