import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';
import Swal from 'sweetalert2'

const OrderCardRow = ({ order, orders, setOrders }) => {
    const { _id, name, image, category, price, origin, orderTime } = order;

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
                fetch(`http://localhost:5000/orders/${_id}`, {
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
                            const remaining = orders.filter(items => items._id !== _id);
                            setOrders(remaining)
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
            <td>
                <h1>{orderTime}</h1>
            </td>
            <td>{price}</td>
            <th>
                <h1 className='font-normal'>{origin}</h1>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} ><TiDelete className='text-3xl' /></button>
            </th>
        </tr>
    );
};

OrderCardRow.propTypes = {
    order: PropTypes.object,
    orders: PropTypes.array,
    setOrders: PropTypes.func
};

export default OrderCardRow;