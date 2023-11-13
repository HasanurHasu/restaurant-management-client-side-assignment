import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../provider/AuthProvider";

const Details = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const [food, setFood] = useState({});
    const { name, category, quantity, price, description, addBy, origin, image } = food;
    useEffect(() => {
        fetch(`http://localhost:5000/updateProducts/${id}`)
            .then(res => res.json())
            .then(data => setFood(data[0]))
    }, [])

    const handleAddToCard = () => {

        const email = user.email;
        const addCard = { name, category, quantity, price, description, email, origin, image }
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
                <div className="flex gap-5">
                    <button className='bg-orange-600 text-white rounded py-3 w-40'>By Now</button>
                    <button onClick={handleAddToCard} className='bg-green-600 text-white rounded py-3 w-40'>Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default Details;