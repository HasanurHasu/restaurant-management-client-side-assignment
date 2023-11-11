import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';
import { RiEditBoxLine } from 'react-icons/ri';

const AddedItemsRow = ({ addedItem }) => {
    const { name, image, category, price, quantity, origin } = addedItem;
    return (
        <tr>
            <th>
                <label>
                    <button><TiDelete className='text-3xl' /></button>
                </label>
            </th>
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
                <button><RiEditBoxLine className='text-2xl' /></button>
            </th>
        </tr>
    );
};

AddedItemsRow.propTypes = {
    addedItem: PropTypes.object
};

export default AddedItemsRow;