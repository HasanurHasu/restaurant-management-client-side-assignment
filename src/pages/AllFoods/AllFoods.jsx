import { useContext, useEffect, useState } from "react";
import AllFoodsCard from "./AllFoodsCard";
import { AuthContext } from "../../provider/AuthProvider";
// import './AllFoods.css'


const AllFoods = () => {
    const [foods, setFoots] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0)
    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch('http://localhost:5000/foodsCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/allFoots?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setFoots(data))
    }, [currentPage, itemsPerPage]);


    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }


    return (
        <div className="mt-5 max-w-6xl mx-auto">
            <h1 className="text-3xl text-center font-bold">All Foods</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    foods.map(topFood => <AllFoodsCard key={topFood._id} topFood={topFood}></AllFoodsCard>)
                }
            </div>

            <div className='text-center text-lg space-x-2 my-5'>
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={`${currentPage === page ? 'bg-orange-600 text-white' : undefined} w-8 h-8 rounded`}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page+1}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
            </div>

        </div>
    );
};

export default AllFoods;