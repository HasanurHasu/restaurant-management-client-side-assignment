import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopFoodCard = ({ topFood }) => {
    const { _id, name, image, totalOrder } = topFood;
    return (
        <div className="card bg-base-100 border shadow-xl">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl lg:h-40 lg:w-56" />
            </figure>
            <div className="px-5 py-5 space-y-2">
                <h2 className="card-title">{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className='text-pink-600 font-medium'>Total Order: {totalOrder}</p>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-3">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <span>4/5</span>
                        </div>
                    </div>
                    <div>
                        <Link to={`/details/${_id}`}><button className='btn-sm bg-orange-600 text-white rounded'>Details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

TopFoodCard.propTypes = {
    topFood: PropTypes.object
};

export default TopFoodCard;