import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AddedItemsRow from "./AddedItemsRow";
import { AiFillDelete } from 'react-icons/ai';


const AddedItems = () => {
    const { user } = useContext(AuthContext);
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addedItems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAddedItems(data))
    }, [])
    return (
        <div className="overflow-x-auto max-w-6xl mx-auto my-8">
            <table className="table">
                {/* head */}
                <thead className="font-bold text-black">
                    <tr>
                        <th>
                            <label>
                                <h1>Delete</h1>
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Origin</th>
                        <th>Edit</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        addedItems.map(addedItem => <AddedItemsRow key={addedItem._id} addedItem={addedItem} addedItems={addedItems} setAddedItems={setAddedItems}></AddedItemsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AddedItems;