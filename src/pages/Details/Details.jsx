import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const [food, setFood] = useState({});
    const { name, category, quantity, price, description, origin, image, addByName, totalOrder } = food;
    const orderCount = { totalOrder: parseInt(totalOrder) + 1 };
    useEffect(() => {
        fetch(`http://localhost:5000/updateProducts/${id}`)
            .then(res => res.json())
            .then(data => setFood(data[0]))
    }, [])

    const handleAddToCard = () => {
        if (quantity <= totalOrder) {
            return toast.error('Food Quantity Not Available')
        }

        var today = new Date();

        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        
        const email = user.email;
        const addCard = { name, category, quantity, price, description, email, origin, image, orderDate : (year + '-' + month + '-' + day)}
        console.log(addCard);
        fetch('http://localhost:5000/addToCard', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCard)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Food Add Successful",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })



        fetch(`http://localhost:5000/foodsOrder/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderCount)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Order Successful',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    console.log(food);
    return (
        <div className="max-w-6xl mx-auto my-5 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8">
            <div className="w-1/2">
                <img src={image} className="rounded-md w-full" alt="" />
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p>{category}</p>
                <div className="flex items-center gap-2">
                    <p>Rating: </p>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <p>{description}</p>
                <p className="text-lg font-semibold">Price: ${price}</p>
                <p>Origin: {origin}</p>
                <p>Made By: {addByName}</p>
                <p className="text-pink-600 text-lg font-semibold">Total Order: {totalOrder}</p>
                <div className="flex gap-5">
                    <button onClick={handleAddToCard} className='bg-green-600 text-white rounded py-3 w-40'>Order Now</button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Details;