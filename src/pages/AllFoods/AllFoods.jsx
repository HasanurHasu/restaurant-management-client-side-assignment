import { useContext } from "react";
import AllFoodsCard from "./AllFoodsCard";
import { AuthContext } from "../../provider/AuthProvider";


const AllFoods = () => {
    const {foods} = useContext(AuthContext)
    return (
        <div className="mt-5 max-w-6xl mx-auto">
            <h1 className="text-3xl text-center font-bold">All Foods</h1>
            <div  className="grid grid-cols-3 gap-8">
                {
                    foods.map(topFood => <AllFoodsCard key={topFood._id} topFood={topFood}></AllFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;