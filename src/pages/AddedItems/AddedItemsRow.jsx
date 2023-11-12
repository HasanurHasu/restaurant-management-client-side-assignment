import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';
import { RiEditBoxLine } from 'react-icons/ri';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const AddedItemsRow = ({ addedItem, addedItems, setAddedItems }) => {
    const { _id, name, image, category, price, quantity, origin } = addedItem;

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/foods/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Success!',
                                `${name} has been deleted.`,
                                'success'
                            )
                            const remaining = addedItems.filter(items => items._id !== _id);
                            setAddedItems(remaining)
                        }
                    })
            }
        })
    }
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={image} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                <h1>{category}</h1>
            </td>
            <td>{price}</td>
            <th>
                <h1 className='font-normal'>{quantity}</h1>
            </th>
            <th>
                <h1 className='font-normal'>{origin}</h1>
            </th>
            <th>
                <Link to={`/updateItems/${_id}`}><button><RiEditBoxLine className='text-2xl' /></button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} ><TiDelete className='text-3xl' /></button>
            </th>
        </tr>
    );
};

AddedItemsRow.propTypes = {
    addedItem: PropTypes.object,
    addedItems: PropTypes.array,
    setAddedItems: PropTypes.func
};

export default AddedItemsRow;