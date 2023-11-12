import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateItems = () => {
    const { id } = useParams();
    const [food, setFood] = useState({});
    const { name, category, quantity, price, description, addBy, origin, image } = food;
    useEffect(() => {
        fetch(`http://localhost:5000/updateProducts/${id}`)
            .then(res => res.json())
            .then(data => setFood(data[0]))
    }, [])



    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const addBy = form.addBy.value;
        const origin = form.origin.value;
        const image = form.image.value;

        const updateProduct = { name, category, quantity, price, description, addBy, origin, image };
        console.log(updateProduct);

        fetch(`http://localhost:5000/foods/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Update Successful',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })


                }
            })
    }

    return (
        <div className="max-w-6xl mx-auto bg-[#FFF8F5] p-20">
            <h1 className="text-3xl text-center font-bold mb-4">Update Product</h1>
            <div>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-5 mt-10">
                        <div>
                            <h3 className="label-text text-xl mb-3">Food Name</h3>
                            <input type="name" name="name" placeholder="Enter Product Name" defaultValue={name} className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Food Category</h3>
                            <input type="name" name="category" placeholder="Enter Category Name" defaultValue={category} className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Quantity</h3>
                            <input type="name" name="quantity" placeholder="Enter Quantity" defaultValue={quantity} className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Food Price</h3>
                            <input type="name" name="price" placeholder="Enter Products Price" defaultValue={price} className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Short Description</h3>
                            <input type="name" name="description" placeholder="Enter Short Description" defaultValue={description} className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Add By</h3>
                            <input type="name" name="addBy" defaultValue={addBy} readOnly className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Food Origin</h3>
                            <input type="name" name="origin" placeholder="Food Origin" defaultValue={origin} className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Image</h3>
                            <input type="name" name="image" placeholder="Enter Image URL" defaultValue={image} className="p-[10px] rounded-md w-full" />
                        </div>
                        <input type="submit" className="w-full py-[10px] text-center font-medium bg-orange-600 text-white col-span-2 border text-lg rounded-md" value="Update Items" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;