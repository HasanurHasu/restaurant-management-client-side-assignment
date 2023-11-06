
const AddItems = () => {
    const handleAddItems = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const addBy = form.addBy.value;
        const origin = form.origin.value;
        const image = form.image.value;

        const newItems = { name, category, quantity, price, description, addBy, origin, image }
        console.log(newItems);

    }
    return (
        <div className="max-w-6xl mx-auto bg-[#FFF8F5] p-20">
            <h1 className="text-3xl text-center font-bold mb-4">Add New Product</h1>
            <p className="text-center w-9/12 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <div>
                <form onSubmit={handleAddItems}>
                    <div className="grid grid-cols-2 gap-5 mt-10">
                        <div>
                            <h3 className="label-text text-xl mb-3">Food Name</h3>
                            <input type="name" name="name" placeholder="Enter Product Name" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Food Category</h3>
                            <input type="name" name="category" placeholder="Enter Category Name" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Quantity</h3>
                            <input type="name" name="quantity" placeholder="Enter Quantity" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Food Price</h3>
                            <input type="name" name="price" placeholder="Enter Products Price" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Short Description</h3>
                            <input type="name" name="description" placeholder="Enter Short Description" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Add By</h3>
                            <input type="name" name="addBy" placeholder="Add By" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Food Origin</h3>
                            <input type="name" name="origin" placeholder="Food Origin" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Image</h3>
                            <input type="name" name="image" placeholder="Enter Image URL" className="p-[10px] rounded-md w-full" />
                        </div>
                        <input type="submit" className="w-full py-[10px] text-center font-medium bg-orange-600 text-white col-span-2 border text-lg rounded-md" value="Add Items" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;