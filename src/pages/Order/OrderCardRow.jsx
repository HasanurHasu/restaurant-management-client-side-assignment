import PropTypes from 'prop-types';

const OrderCardRow = ({order}) => {
    const {  name, image, category, price, quantity, origin, orderDate } = order;
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
                <h1>{orderDate}</h1>
            </td>
            <td>{price}</td>
            <th>
                <h1 className='font-normal'>{quantity}</h1>
            </th>
            <th>
                <h1 className='font-normal'>{origin}</h1>
            </th>
        </tr>
    );
};

OrderCardRow.propTypes = {
    order: PropTypes.object
};

export default OrderCardRow;