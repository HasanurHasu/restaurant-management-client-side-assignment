import PropTypes from 'prop-types';

const TopFoodCard = ({ topFood }) => {
    const { name, img, foodCategory } = topFood;
    return (
        <div className="card bg-base-100 border shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl h-40 w-56" />
            </figure>
            <div className="px-5 py-5 space-y-2">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
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
                        <button className='btn-sm bg-orange-600 text-white rounded'>Details</button>
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