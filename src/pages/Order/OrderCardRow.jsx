import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';

const OrderCardRow = ({ order }) => {
    const { _id, name, image, category, price, quantity, origin, orderTime } = order;
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
                <h1 className='font-normal'>{quantity}</h1>
            </th>
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
    order: PropTypes.object
};

export default OrderCardRow;